import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Chattanooga's Upstanding Members",
  description:
    "The most upstanding, outstanding, and sometimes outpouring members of Chattanooga.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&family=Nunito:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-off-white font-body text-charcoal">{children}</body>
    </html>
  );
}
