// app/privacy/page.tsx
import Link from "next/link";

export default function PrivacyPage() {
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
          <div className="text-sm text-white/50">Privacy Policy</div>
        </div>
      </header>

      <section className="mx-auto max-w-3xl px-6 py-12">
        <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-2 text-sm text-white/50">
          Last updated: July 26, 2026
        </p>

        <div className="mt-8 space-y-8 text-sm leading-7 text-white/70">
          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              1. Introduction
            </h2>
            <p className="mt-2">
              Frozen Sherpa Foods (“we”, “us”, or “our”) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              2. Information We Collect
            </h2>
            <p className="mt-2">
              We may collect the following types of information:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-white/70">
              <li>Information you provide directly (e.g., name, email, address) when placing an order or contacting us.</li>
              <li>Usage information (e.g., pages visited, time spent, device type) collected automatically.</li>
              <li>Cookies and similar technologies to improve your experience and analyze site traffic.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              3. How We Use Your Information
            </h2>
            <p className="mt-2">
              We use your information to:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-white/70">
              <li>Process and fulfill your orders.</li>
              <li>Communicate with you about your orders, promotions, or updates.</li>
              <li>Improve our website, products, and services.</li>
              <li>Comply with applicable laws and regulations.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              4. Sharing of Information
            </h2>
            <p className="mt-2">
              We do not sell your personal information. We may share your data with:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-white/70">
              <li>Service providers who help us operate our business (e.g., payment processors, delivery partners).</li>
              <li>Legal authorities if required by law or to protect our rights.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              5. Data Security
            </h2>
            <p className="mt-2">
              We implement reasonable technical and organizational measures to protect your personal information. However, no method of transmission over the internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              6. Your Rights
            </h2>
            <p className="mt-2">
              Depending on your location, you may have rights to:
            </p>
            <ul className="mt-2 list-disc pl-5 space-y-1 text-white/70">
              <li>Access, correct, or delete your personal information.</li>
              <li>Opt out of certain data processing or marketing communications.</li>
              <li>Request a copy of your data in a portable format.</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, please contact us using the information below.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              7. Changes to This Policy
            </h2>
            <p className="mt-2">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated “Last updated” date.
            </p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-yellow-300">
              8. Contact Us
            </h2>
            <p className="mt-2">
              If you have any questions about this Privacy Policy or our data practices, please contact us at:
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