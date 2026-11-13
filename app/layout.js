import { Cormorant_Garamond, Noto_Serif_Malayalam } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-serif" });
const ml = Noto_Serif_Malayalam({ subsets: ["malayalam"], weight: ["500", "700"], variable: "--font-ml" });

const title = "ജൂഹിയുടെ വളകാപ്പ് | Valakappu";
const description = "You are warmly invited to Juhi's Valakappu on 5 December 2026, 2:30 PM at Heritage 1866, Melur, Thalassery.";

export const metadata = { title, description, openGraph: { title, description, type: "website" } };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${serif.variable} ${ml.variable}`}>
      <body>{children}</body>
    </html>
  );
}
