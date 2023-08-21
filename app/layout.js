import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@components/Navbar";
import { Pacifico, Lato } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lato",
});

export const metadata = {
  title: "Greenleef Landscape",
  description:
    "Welcome to Greenleef Landscape, your premier destination for all your landscaping needs. With years of experience in the industry, we specialize in providing top-notch landscape design, hardscaping, outdoor lighting, and irrigation system installation services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pacifico.variable} ${lato.variable}`}>
      <body className="bg-[#21261A]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
