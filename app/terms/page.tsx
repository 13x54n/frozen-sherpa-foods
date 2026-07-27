// app/terms/page.tsx
import Link from "next/link";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#05070b] text-white">
      <header className="border-b border-white/10 bg-[#05070b]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/80 transition hover:text-white"
          >
            <span aria-hidden="true">←</span>
            Back
          </Link>
          <div className="text-sm text-white/50">Terms of Service</div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-2 text-sm text-white/50">
          Last updated: July 26, 2026
        </p>

        <div className="mt-8 space-y-8 text-sm leading-7 text-white/70">
          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              1. Acceptance of Terms
            </h2>
            <p className="mt-2">
              By accessing and using the Frozen Sherpa Foods website and services, you agree to be bound by these Terms of Service. If you do not agree, please do not use our site or services.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              2. Use of Website
            </h2>
            <p className="mt-2">
              You agree to use this website only for lawful purposes and in a way that does not infringe on the rights of others or restrict anyone else’s use of the site. You may not:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-white/70">
              <li>Attempt to interfere with or disrupt the website or servers.</li>
              <li>Use automated systems to access the site without our permission.</li>
              <li>Use the site to transmit any harmful, illegal, or abusive content.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              3. Orders and Payments
            </h2>
            <p className="mt-2">
              By placing an order, you agree to:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-white/70">
              <li>Provide accurate and complete order and payment information.</li>
              <li>Pay all charges at the prices quoted at the time of purchase.</li>
              <li>Accept delivery according to our stated delivery terms.</li>
            </ul>
            <p className="mt-2">
              We reserve the right to refuse or cancel any order for any reason, including product availability, errors in pricing, or suspected fraud.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              4. Product Information
            </h2>
            <p className="mt-2">
              We strive to provide accurate product descriptions, images, and pricing, but we do not guarantee that all information is error-free. Colors, textures, and packaging may vary slightly from what is shown online.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              5. Returns and Refunds
            </h2>
            <p className="mt-2">
              Our return and refund policies apply as described on our website or at the time of purchase. For frozen and perishable goods, special conditions may apply due to health and safety regulations.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              6. Limitation of Liability
            </h2>
            <p className="mt-2">
              To the fullest extent permitted by law, Frozen Sherpa Foods is not liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              7. Changes to Terms
            </h2>
            <p className="mt-2">
              We may update these Terms of Service from time to time. Any changes will be posted on this page with an updated “Last updated” date. Continued use of the site after changes means you accept the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              8. Governing Law
            </h2>
            <p className="mt-2">
              These Terms of Service are governed by the laws of Ontario, Canada, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              9. Contact Us
            </h2>
            <p className="mt-2">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <p className="mt-1">
              Email:{" "}
              <a
                href="mailto:frozensherpafoods@gmail.com"
                className="text-yellow-300 underline decoration-yellow-300/50 underline-offset-2 hover:text-yellow-200"
              >
                frozensherpafoods@gmail.com
              </a>
            </p>
            <p className="mt-1">
              Phone:{" "}
              <a
                href="tel:+14167258527"
                className="text-yellow-300 underline decoration-yellow-300/50 underline-offset-2 hover:text-yellow-200"
              >
                +1 (416) 725-8527
              </a>
            </p>
            <p className="mt-3 text-white/60">
              Frozen Sherpa Foods<br />
              Toronto, Ontario, Canada
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}