import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Thank You | PureLeaf Extracts",
  description: "Your message has been received. Our team will get back to you soon.",
};

const copy = {
  contact: {
    badge: "Message Sent",
    title: "Thank you for reaching out.",
    body: "We've received your message. Our supply team will review it and get back to you within 48 hours.",
    icon: "mark_email_read",
  },
  waitlist: {
    badge: "Request Received",
    title: "You're on the list.",
    body: "We've received your allocation request. We'll contact you directly when a supply slot opens for your sector.",
    icon: "playlist_add_check",
  },
};

export default async function ThankYouPage({ searchParams }) {
  const params = await searchParams;
  const from = params?.from === "waitlist" ? "waitlist" : "contact";
  const content = copy[from];

  return (
    <>
      <main className="pt-20 sm:pt-24 min-h-[70vh] flex flex-col">
        <section className="flex-1 flex items-center justify-center px-4 sm:px-grid-margin py-12 md:py-16">
          <div className="max-w-lg w-full text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-container/50 text-primary mb-6 mx-auto">
              <span className="material-symbols-outlined text-4xl icon-fill">{content.icon}</span>
            </div>

            <p className="font-label-bold text-label-bold text-primary uppercase tracking-wider mb-4">
              {content.badge}
            </p>

            <h1 className="font-display-xl text-display-xl text-on-surface mb-4 leading-tight">{content.title}</h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant mb-10">{content.body}</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 bg-inverse-surface text-inverse-on-surface px-7 py-3.5 rounded-xl font-label-bold text-label-bold hover:bg-primary hover:text-on-primary transition-colors"
              >
                Back to Home
                <span className="material-symbols-outlined text-sm">home</span>
              </Link>
              <Link
                href="/extracts"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-label-bold text-label-bold border-2 border-outline-variant text-on-surface hover:border-primary transition-colors"
              >
                View Extracts
              </Link>
            </div>

            <p className="font-body-md text-sm text-on-surface-variant mt-10">
              Questions? Email{" "}
              <a href="mailto:hello@densitea.in" className="text-primary hover:underline">
                hello@densitea.in
              </a>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
