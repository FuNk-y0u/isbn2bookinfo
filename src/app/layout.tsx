import type { Metadata } from "next";

import "./globals.css";


export const metadata: Metadata = {
  title: "ISBN Book Searcher",
  description: "A basic reliable ISBN to book info converter",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
