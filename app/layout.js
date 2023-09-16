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
  title: "Greenleef Landscape - Exceptional Landscaping Services",
  description:
    "Greenleef Landscape is a professional landscaping company that provides exceptional landscaping services to clients in [your area]. We specialize in designing and installing beautiful and functional landscapes that meet the needs of our clients. We also offer a variety of ongoing maintenance services to keep your landscape looking its best.",

  openGraph: {
    title: "Greenleef Landscape - Exceptional Landscaping Services",
    description:
      "Greenleef Landscape is a professional landscaping company that provides exceptional landscaping services to clients in [your area]. We specialize in designing and installing beautiful and functional landscapes that meet the needs of our clients. We also offer a variety of ongoing maintenance services to keep your landscape looking its best.",
  },
};

//   <meta name="description" content="">

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${pacifico.variable} ${lato.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="MH8D2PmfPRulK5S-WC7ZcxKOoGO7tHDrsAtm_95GxTE"
        />
        <meta
          name="keywords"
          content="landscaping services, landscape design, landscape installation, landscape maintenance, Greenleef Landscape, Germany"
        ></meta>
      </head>
      <body className="bg-[#21261A]">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
