import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Spencer Maas | Software Engineer Portfolio",
  description:
    "Explore Spencer Maas's portfolio showcasing expertise in Next.js, React, and full-stack development through 60+ deployed web applications, featuring static site generation, server-side rendering, and WebAssembly projects.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Script src="/flowbite.min.js" strategy="beforeInteractive" />
      </body>
    </html>
  );
}
