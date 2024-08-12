import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakataSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakata",
  display: "swap",
});
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dmSans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Horizon Dashboard UI",
  description: "Build Dashboard = @olakadasami github",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${dmSans.variable} ${plusJakataSans.variable}`}
    >
      <body className="min-h-screen bg-background font-sans antialiased font-jakata">
        {children}
      </body>
    </html>
  );
}
