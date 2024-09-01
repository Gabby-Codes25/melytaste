import "./globals.css";
import Header from "./components/header";
import { ReactNode } from "react";

export const metadata = {
  title: "MelyTaste",
  description: "MelyTaste foods & services",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
