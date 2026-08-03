import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "./components/sheard/NavBar";
import { Toaster } from "sonner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});


const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Qurbani Hat",
  description: "Qurbani Hat is a platform that connects people who want to perform Qurbani with those who need it. We make it easy for you to donate your Qurbani and help those in need.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
      data-theme='light'
    >
      <body suppressHydrationWarning className={`min-h-full flex flex-col ${inter.className} ${plusJakartaSans.className}`}>
        <main>
          {children}
          <Toaster richColors position="top-right" />
        </main>
      </body>
    </html>
  );
}
