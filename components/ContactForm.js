"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ContactForm() {
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
      firstName: formData.get("firstName"),
      lastName: formData.get("lastName"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      router.push("/thank-you?from=contact");
    } catch (err) {
      setStatus("error");
      setError(err.message || "Something went wrong.");
    }
  }

  return (
    <>
      <form className="space-y-8" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-2 relative">
            <label
              className="font-label-bold text-xs uppercase tracking-wider text-on-surface-variant absolute -top-3 left-3 bg-surface px-1 z-10"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="rounded-xl border border-outline-variant bg-transparent px-4 py-4 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm disabled:opacity-60"
              id="firstName"
              name="firstName"
              placeholder="Jane"
              type="text"
              required
              disabled={status === "loading"}
            />
          </div>
          <div className="flex flex-col gap-2 relative">
            <label
              className="font-label-bold text-xs uppercase tracking-wider text-on-surface-variant absolute -top-3 left-3 bg-surface px-1 z-10"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="rounded-xl border border-outline-variant bg-transparent px-4 py-4 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm disabled:opacity-60"
              id="lastName"
              name="lastName"
              placeholder="Doe"
              type="text"
              required
              disabled={status === "loading"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 relative">
          <label
            className="font-label-bold text-xs uppercase tracking-wider text-on-surface-variant absolute -top-3 left-3 bg-surface px-1 z-10"
            htmlFor="email"
          >
            Work Email
          </label>
          <input
            className="rounded-xl border border-outline-variant bg-transparent px-4 py-4 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm disabled:opacity-60"
            id="email"
            name="email"
            placeholder="jane@example.com"
            type="email"
            required
            disabled={status === "loading"}
          />
        </div>
        <div className="flex flex-col gap-2 relative">
          <label
            className="font-label-bold text-xs uppercase tracking-wider text-on-surface-variant absolute -top-3 left-3 bg-surface px-1 z-10"
            htmlFor="subject"
          >
            What&apos;s this about?
          </label>
          <select
            className="rounded-xl border border-outline-variant bg-transparent px-4 py-4 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm appearance-none disabled:opacity-60"
            id="subject"
            name="subject"
            defaultValue=""
            required
            disabled={status === "loading"}
          >
            <option disabled value="">
              Select a topic
            </option>
            <option>Supply Allocation</option>
            <option>Compound Specifications</option>
            <option>Partnership Inquiry</option>
            <option>Other</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-on-surface-variant">
            <span className="material-symbols-outlined">expand_more</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 relative">
          <label
            className="font-label-bold text-xs uppercase tracking-wider text-on-surface-variant absolute -top-3 left-3 bg-surface px-1 z-10"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="rounded-xl border border-outline-variant bg-transparent px-4 py-4 font-body-md text-on-surface focus:border-primary focus:ring-1 focus:ring-primary transition-all shadow-sm resize-y min-h-[160px] disabled:opacity-60"
            id="message"
            name="message"
            placeholder="Tell us about your volume and compound needs..."
            required
            disabled={status === "loading"}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="bg-primary text-on-primary px-8 py-4 rounded-xl font-label-bold text-label-bold hover:bg-surface-tint hover:shadow-md transition-all w-full md:w-auto flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
          <span className="material-symbols-outlined text-sm">send</span>
        </button>
      </form>

      {status === "error" && (
        <p className="mt-4 font-body-md text-error" role="alert">
          {error}
        </p>
      )}
    </>
  );
}
