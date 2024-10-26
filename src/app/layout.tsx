import type { Metadata } from "next";
// import localFont from "next/font/local";
import {Recursive} from "next/font/google"
import "./globals.css";
import Head from 'next/head';


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const recursive = Recursive({ subsets: ["cyrillic-ext"] });
export const metadata: Metadata = {
  title: "Adarsh Vishwakarma",
  description: "Custom Portfolio Website for Adarsh Vishwakarma to showcase his work and projects.",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="google-site-verification" content="qeJyPSM_Y9EMoJsyleMcixsWmwRJmMqt05yJelGLERY" />
      </Head>
      <body
        className={recursive.className}
      >
        {children}
      </body>
    </html>
  );
}
