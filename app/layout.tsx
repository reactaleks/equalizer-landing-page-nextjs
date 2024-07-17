import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Equalizer Pre-Launch Page - Front End Mentor",
  description: "Page created as part of front end mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen max-w-[2560px] mx-auto bg-white">{children}</body>
    </html>
  );
}
