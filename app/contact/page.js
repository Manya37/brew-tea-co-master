import Image from "next/image";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Contact Us | Densitea",
  description:
    "Got a question about our raw material supply? Need help with allocation? We're all ears.",
};

export default function ContactPage() {
  return (
    <>
      <main className="pt-20 sm:pt-24">
        <section className="bg-surface relative overflow-hidden py-12 md:py-16 px-4 sm:px-grid-margin">
          <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-grid-gutter items-center relative z-10">
            <div className="md:col-span-5 flex flex-col gap-4 sm:gap-6 md:pr-12">
              <div className="inline-flex items-center gap-2 bg-primary-container/20 text-on-primary-container px-4 py-2 rounded-full w-fit mb-4">
                <span className="material-symbols-outlined text-sm">chat_bubble_outline</span>
                <span className="font-label-bold text-xs uppercase tracking-wider">Get in Touch</span>
              </div>
              <h1 className="font-display-xl text-display-xl text-on-surface leading-tight">
                Let&apos;s Talk Supply
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                Got a question about our compounds? Need help with allocation? Or ready to discuss annual supply contracts? We&apos;re all ears.
              </p>
              <div className="flex flex-col gap-3 mt-2">
                <a
                  href="tel:+919915050493"
                  className="inline-flex items-center gap-2 font-body-md text-on-surface hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">call</span>
                  +91 99150 50493
                </a>
                <a
                  href="mailto:hello@densitea.in"
                  className="inline-flex items-center gap-2 font-body-md text-on-surface hover:text-primary transition-colors"
                >
                  <span className="material-symbols-outlined text-lg">mail</span>
                  hello@densitea.in
                </a>
              </div>
            </div>
            <div className="md:col-span-7 relative h-[280px] sm:h-[360px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply z-10" />
              <Image
                src="/contact.png"
                alt="Green tea leaf supply for extract manufacturers"
                fill
                priority
                className="object-cover object-center relative z-0"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/40 to-transparent z-10" />
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-container/10 -skew-x-12 transform origin-top-right z-0" />
        </section>

        <section className="py-12 md:py-16 px-4 sm:px-grid-margin max-w-[1440px] mx-auto border-t border-surface-container-highest">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-grid-gutter">
            <div className="lg:col-span-7">
              <div className="mb-10">
                <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface mb-4">
                  Drop us a line
                </h2>
                <p className="font-body-md text-on-surface-variant">
                  Fill out the form below and our supply team will get back to you within 48 hours.
                </p>
              </div>
              <ContactForm />
            </div>

            <div className="lg:col-span-5 flex flex-col gap-8">
              <div className="bg-secondary text-on-secondary rounded-2xl p-10 flex flex-col justify-center relative overflow-hidden group shadow-lg">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-4xl mb-6 icon-fill text-secondary-fixed">
                    storefront
                  </span>
                  <h3 className="font-headline-md text-headline-md mb-3">Extract-Grade Raw Material</h3>
                  <p className="font-body-md text-body-md mb-8 text-secondary-fixed-dim">
                    View leaf grades, compound specs, and request annual allocation for your extract line.
                  </p>
                  <Link
                    href="/extracts"
                    className="inline-flex items-center gap-2 bg-on-secondary text-secondary px-6 py-3 rounded-full font-label-bold text-sm w-fit hover:bg-secondary-fixed transition-colors shadow-sm"
                  >
                    Request Allocation
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-on-secondary/10 rounded-full blur-2xl z-0 group-hover:scale-110 transition-transform duration-700" />
              </div>

              <div className="bg-surface-container rounded-2xl p-10 relative overflow-hidden group hover:shadow-md transition-all border border-surface-container-highest">
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <div className="bg-primary-container/30 text-on-primary-container w-12 h-12 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <span className="material-symbols-outlined icon-fill">science</span>
                    </div>
                    <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-2">
                      View compound specs
                    </h3>
                    <p className="font-body-md text-on-surface-variant mb-8">
                      Explore EGCG, polyphenols, L-Theanine, theaflavins, and more — with grade ranges for every extract.
                    </p>
                  </div>
                  <Link
                    href="/#compounds"
                    className="flex items-center gap-2 font-label-bold text-sm text-primary uppercase tracking-wider group-hover:text-surface-tint transition-colors"
                  >
                    View Specs
                    <span className="material-symbols-outlined text-sm transform group-hover:translate-x-1 transition-transform">
                      east
                    </span>
                  </Link>
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity z-0" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
