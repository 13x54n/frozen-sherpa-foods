import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Frozen Sherpa Foods | Authentic Sherpa Frozen Meals in Toronto",
    template: "%s | Frozen Sherpa Foods",
  },
  description:
    "Frozen Sherpa Foods offers authentic Sherpa frozen meals in Toronto, Ontario. Healthy, hearty, convenient traditional food made for busy lifestyles.",
  keywords: [
    "Frozen Sherpa Foods",
    "Sherpa food Toronto",
    "frozen meals Ontario",
    "authentic Sherpa cuisine",
    "Nepali food Toronto",
  ],
  openGraph: {
    title: "Frozen Sherpa Foods",
    description:
      "Authentic Sherpa frozen meals in Toronto, Ontario.",
    url: "https://yourdomain.com",
    siteName: "Frozen Sherpa Foods",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frozen Sherpa Foods",
    description:
      "Authentic Sherpa frozen meals in Toronto, Ontario.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#04070c] text-white">
        <div className="flex-1">{children}</div>

        <footer className="border-t border-white/10 bg-[#060b12]">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm text-yellow-300">
                  Frozen Sherpa Foods
                </p>
                <p className="mt-4 text-sm leading-6 text-white/60">
                  Sherpa tradition meets healthy & hearty food. Convenient,
                  nutritious, and delicious meals for busy lifestyles.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">Quick Links</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/60">
                  <li><a href="#menu" className="hover:text-yellow-300">Menu</a></li>
                  <li><a href="#blog" className="hover:text-yellow-300">Blog</a></li>
                  <li><a href="/about" className="hover:text-yellow-300">About Us</a></li>
                  <li><a href="/contact" className="hover:text-yellow-300">Contact</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">Location</h3>
                <p className="mt-4 text-sm leading-6 text-white/60">
                  Scarborough, Ontario<br />
                  Canada
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">Contact</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/60">
                  <li>
                    <a
                      href="mailto:frozensherpafoods@outlook.com"
                      className="hover:text-yellow-300"
                    >
                      frozensherpafoods@outlook.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+14167258527" className="hover:text-yellow-300">
                      +1 (416) 725-8527
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row">
              <p>&copy; {new Date().getFullYear()} Frozen Sherpa Foods. All rights reserved.</p>
              <div className="flex gap-4">
                <a href="/privacy" className="hover:text-yellow-300">Privacy</a>
                <a href="/terms" className="hover:text-yellow-300">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}