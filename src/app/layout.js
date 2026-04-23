import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mohamed Niyaz | Portfolio",
  description: "Personal portfolio of Mohamed Niyaz — Senior Engineer at Presidio, M.Tech AI/ML at BITS Pilani.",
  icons: {
    icon: '/niyaz-logo-icon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} antialiased selection:bg-[#38bdf8]/30`}>
        {children}
      </body>
    </html>
  );
}
