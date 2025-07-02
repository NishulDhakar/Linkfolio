import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Hey Nishul",
  description: "Generated an awesome linkfolio with Next.js and Tailwind CSS",
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
      </body>
    </html>
  );
}
