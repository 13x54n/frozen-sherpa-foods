// app/layout.tsx
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

const siteUrl = "https://www.frozensherpafoods.ca";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default:
      "Frozen Sherpa Foods | Authentic Sherpa & Nepali Frozen Meals in Scarborough, Toronto",
    template: "%s | Frozen Sherpa Foods",
  },

  description:
    "Frozen Sherpa Foods offers authentic Sherpa and Nepali frozen meals in Scarborough, Toronto, and the GTA. Healthy, hearty, convenient traditional food—including frozen momo, riki kur, and keema noodles—made for busy lifestyles.",

  keywords: [
    "Frozen Sherpa Foods",
    "Sherpa food Scarborough",
    "Sherpa food Toronto",
    "Nepali food Scarborough",
    "Nepali food Toronto",
    "frozen momo Toronto",
    "frozen momo Scarborough",
    "frozen Nepali food GTA",
    "frozen Sherpa meals Ontario",
    "authentic Sherpa cuisine",
    "Himalayan food Toronto",
    "frozen meals Ontario",
  ],

  authors: [{ name: "Frozen Sherpa Foods" }],

  alternates: {
    canonical: siteUrl,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Frozen Sherpa Foods | Scarborough & Toronto",
    description:
      "Authentic Sherpa and Nepali frozen meals in Scarborough, Toronto, and the GTA. Healthy, hearty, and convenient traditional food for busy families.",
    url: siteUrl,
    siteName: "Frozen Sherpa Foods",
    type: "website",
    locale: "en_CA",
  },

  twitter: {
    card: "summary_large_image",
    title: "Frozen Sherpa Foods | Scarborough & Toronto",
    description:
      "Authentic Sherpa and Nepali frozen meals in Scarborough, Toronto, and the GTA.",
    site: "@frozensherpa", // update if you have a real handle
  },

  // Optional: add your logo / social image later
  // images: [
  //   {
  //     url: "/og-image.jpg",
  //     width: 1200,
  //     height: 630,
  //     alt: "Frozen Sherpa Foods – Authentic Sherpa & Nepali Frozen Meals",
  //   },
  // ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#000] text-white">
        <div className="flex-1">{children}</div>

        <footer className="border-t border-white/10 bg-[#000]">
          <div className="mx-auto max-w-7xl px-6 py-12">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="inline-flex rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-sm text-yellow-300">
                  Frozen Sherpa Foods
                </p>
                <p className="mt-4 text-sm leading-6 text-white/60">
                  Authentic Sherpa and Nepali frozen meals in Scarborough, Toronto, and the
                  GTA. Healthy, hearty, and convenient traditional food for busy families.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">Quick Links</h3>
                <ul className="mt-4 space-y-3 text-sm text-white/60">
                  <li>
                    <a href="/menu" className="hover:text-yellow-300">
                      Menu
                    </a>
                  </li>
                  <li>
                    <a href="/blog" className="hover:text-yellow-300">
                      Blog
                    </a>
                  </li>
                  {/* <li><a href="/about" className="hover:text-yellow-300">About Us</a></li> */}
                </ul>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white">Location</h3>
                <p className="mt-4 text-sm leading-6 text-white/60">
                  Scarborough, Ontario<br />
                  Toronto, Ontario<br />
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
                      aria-label="Email Frozen Sherpa Foods"
                    >
                      frozensherpafoods@outlook.com
                    </a>
                  </li>
                  <li>
                    <a
                      href="tel:+14167258527"
                      className="hover:text-yellow-300"
                      aria-label="Call Frozen Sherpa Foods"
                    >
                      +1 (416) 725-8527
                    </a>
                  </li>
                  <li className="text-white/50">
                    Open daily 9:00 AM – 9:00 PM
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-white/50 md:flex-row">
              <p>
                &copy; {new Date().getFullYear()} Frozen Sherpa Foods. All rights reserved.
              </p>
              <div className="flex gap-4">
                <a href="/privacy" className="hover:text-yellow-300">
                  Privacy
                </a>
                <a href="/terms" className="hover:text-yellow-300">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}