import localFont from "next/font/local";
import Script from "next/script";
import "./globals.css";

const display = localFont({
  src: "./fonts/SpaceGrotesk.woff2",
  weight: "500 700",
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: "./fonts/Inter.woff2",
  weight: "400 600",
  variable: "--font-body",
  display: "swap",
});

const mono = localFont({
  src: "./fonts/JetBrainsMono.woff2",
  weight: "400 500",
  variable: "--font-mono",
  display: "swap",
});

export const metadata = {
  title: "Move Smarter | LEED-Certified Office Space, Downtown Cincinnati",
  description:
    "LEED-certified office loft space in downtown Cincinnati with tenant-driven customization from day one. Lower energy costs, a 12-year tax abatement, and a build-out shaped around how your team actually works.",
  metadataBase: new URL("https://www.movesmarter.fyi"),
  openGraph: {
    title: "Move Smarter | LEED-Certified Office Space, Downtown Cincinnati",
    description:
      "LEED-certified office loft space in downtown Cincinnati with tenant-driven customization from day one.",
    url: "https://www.movesmarter.fyi",
    siteName: "Move Smarter",
    images: ["/edge.jpg"],
    type: "website",
  },
};

// TODO: Replace with your StatCounter project ID + security code from
// statcounter.com > My Projects > [project] > Install Code
const STATCOUNTER_PROJECT = "REPLACE_WITH_PROJECT_ID";
const STATCOUNTER_SECURITY = "REPLACE_WITH_SECURITY_CODE";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="font-body">
        {children}

        {/* StatCounter */}
        <Script id="statcounter-init" strategy="afterInteractive">
          {`
            var sc_project=${JSON.stringify(STATCOUNTER_PROJECT)};
            var sc_invisible=1;
            var sc_security=${JSON.stringify(STATCOUNTER_SECURITY)};
          `}
        </Script>
        <Script
          src="https://www.statcounter.com/counter/counter.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
