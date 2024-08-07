import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ContactUs from "@/src/components/home/ContactUs";
import Footer from "@/src/components/home/Footer";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fumiwo",
  description: "Fumiwo Website",
  icons: {
    icon: "/fumiwo-favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={poppins.className}>
        {children}
        <ContactUs />
        <Footer />
      </body>
    </html>
  );
}
