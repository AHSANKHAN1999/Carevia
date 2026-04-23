import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Apne components import karein
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Carevia | Professional Home Nursing & Medical Care",
  description: "Providing compassionate, professional, and personalized medical care in the comfort of your own home in Sindh and Dubai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // scroll-smooth add kiya hai taake navbar links smoothly kaam karein
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans">
        
        {/* 1. Sab se upar Header */}
        <Header />
        
        {/* 2. Main Page Content - flex-1 isliye taake Footer hamesha neechay rahay */}
        <main className="flex-1">
          {children}
        </main>
        
        {/* 3. Sab se neechay Footer */}
        <Footer />
        
        {/* 4. Floating WhatsApp Button (Ye har page par floating rahega) */}
        <WhatsAppButton />
        
      </body>
    </html>
  );
}