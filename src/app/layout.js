import { Inter } from "next/font/google";
import "./globals.css";
import ThemeToggle from "@/app/components/ThemeToggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Mohamed Niyaz | Portfolio",
  description:
    "Personal portfolio of Mohamed Niyaz — Senior Engineer at Presidio, M.Tech AI/ML at BITS Pilani.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        {/* Load saved theme before paint to avoid flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.setAttribute('data-theme', 'light');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={inter.variable}>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
