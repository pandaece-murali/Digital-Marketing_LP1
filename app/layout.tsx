
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "PANDAeCe | Performance Marketing Experts",
  description:
    "End-to-end digital marketing services for business owners, including Google Ads, Meta Ads, website development, CRM and automation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script
          src="https://crm.pandaece.com/js/external-tracking.js"
          data-tracking-id="tk_c8115cbbe8574c6eb5fee47615eb895c"
        />
      </body>
    </html>
  );
}
