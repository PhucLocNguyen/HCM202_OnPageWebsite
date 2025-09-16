import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// import SplashCursor from "@/components/ui/SplashCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quá trình phát triển tư tưởng Hồ Chí Minh giai đoạn 1930 đến 1969",
  description:
    "Dự án môn học HCM202 của trường đại học FPT do nhóm 2 thực hiện",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        {/* <SplashCursor /> */}
      </body>
    </html>
  );
}
