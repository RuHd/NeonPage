import { Syncopate,Ubuntu_Mono } from "next/font/google";
import "./globals.css";

const syncopate = Syncopate({
  variable: "--font-syncopate",
  subsets: ["latin"],
  weight: ["400","700"]
});

const ubuntuMono = Ubuntu_Mono({
  variable: "--font-ubuntuMono",
  subsets: ["latin"],
  weight: ["400","700"]
});

export const metadata = {
  title: "Neon Landing Page",
  description: "Created By Ruan Mesquita",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${syncopate.variable} ${ubuntuMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
