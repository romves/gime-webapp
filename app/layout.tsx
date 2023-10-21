import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";

import Footer from "@/components/Footer";
import Dialog from "@/components/ui/Dialog";
import Providers from "@/components/Providers";
import { Toaster } from "react-hot-toast";

const instrumentSans = Instrument_Sans({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  return (
    <html lang="en">
      <body className={instrumentSans.className}>
        <Providers>
          <Toaster />
          <Dialog />
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
