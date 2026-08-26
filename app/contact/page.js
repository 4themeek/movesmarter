import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Contact | Smarter Move",
  description:
    "Tell us your square footage, timeline, and priorities. We'll follow up with availability and a tenant improvement estimate.",
};

export default function ContactPage() {
  return (
    <main>
      <header className="bg-graphite pt-8 pb-16 md:pt-10 md:pb-24">
        <div className="mx-auto max-w-7xl px-6 md:px-10">
          <Logo />
          <p className="font-mono text-xs tracking-widest2 text-leed mt-10 mb-4">
            LET&rsquo;S TALK SPACE
          </p>
          <h1 className="font-display font-semibold text-paper text-3xl sm:text-4xl md:text-5xl leading-tight max-w-2xl">
            Tell us what your team needs.
          </h1>
        </div>
      </header>

      <section className="bg-concrete py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6 md:px-10">
          <div className="bg-paper rounded-sm p-6 sm:p-10 border border-steel/15">
            <ContactForm />
          </div>
          <p className="text-graphite/50 text-xs text-center mt-8">
            By submitting, you agree to be contacted about available space.
            No spam, no lists sold.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
