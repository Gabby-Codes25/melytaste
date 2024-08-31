import "./globals.css";
import Header from "./components/header"

export const Metadata = {
  title: "MelyTaste",
  description: "MelyTaste foods & services",
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}</body>
    </html>
  );
}
