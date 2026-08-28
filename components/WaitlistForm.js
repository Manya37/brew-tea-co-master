"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function WaitlistForm() {
  const router = useRouter();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      company: formData.get("company"),
      sector: formData.get("sector"),
      email: formData.get("email"),
    };

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      router.push("/thank-you?from=waitlist");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong.");
    }
  }

  return (
    <>
      <form
        className="max-w-3xl mx-auto bg-surface-container-low rounded-2xl md:rounded-3xl p-5 sm:p-8 md:p-10 shadow-[0_12px_32px_rgba(0,0,0,0.08)] mb-6"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            name="company"
            placeholder="Company name"
            required
            disabled={status === "loading"}
            className="w-full bg-surface rounded-lg border-2 border-outline-variant px-4 py-3 focus:border-primary focus:ring-0 transition-colors font-body-md text-on-background disabled:opacity-60"
          />
          <select
            name="sector"
            defaultValue=""
            required
            disabled={status === "loading"}
            className="w-full bg-surface rounded-lg border-2 border-outline-variant px-4 py-3 focus:border-primary focus:ring-0 transition-colors font-body-md text-on-background disabled:opacity-60"
          >
            <option value="" disabled>
              Sector
            </option>
            <option>Phytoextract / Extractor</option>
            <option>Nutraceuticals</option>
            <option>Pharma & Ayurvedic</option>
            <option>Cosmetics & Skincare</option>
            <option>Food & Beverage</option>
            <option>Sports Nutrition</option>
            <option>Other</option>
          </select>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="email"
            name="email"
            placeholder="Work email"
            required
            disabled={status === "loading"}
            className="flex-1 bg-surface rounded-lg border-2 border-outline-variant px-4 py-3 focus:border-primary focus:ring-0 transition-colors font-body-md text-on-background disabled:opacity-60"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="bg-inverse-surface text-inverse-on-surface font-label-bold text-label-bold px-8 py-3 rounded-lg hover:bg-on-background transition-colors whitespace-nowrap disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Submitting..." : "Request Allocation"}
          </button>
        </div>
      </form>

      {status === "error" && (
        <p className="font-body-md text-error mb-8 md:mb-10" role="alert">
          {error}
        </p>
      )}
    </>
  );
}
