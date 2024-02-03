import "./globals.css";
import { League_Spartan } from "next/font/google";
const league = League_Spartan({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children}) {
  return (
    <html lang="en">
      <body className={league.className}>{children}</body>
    </html>
  );
}
