import "./globals.css";
import Navbar from "@/components/Navbar";
import CenterButton from "@/components/CenterButton";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="container">{children}</main>
        <CenterButton href="/campaigns" label="ดูแคมเปญทั้งหมด" />
      </body>
    </html>
  );
}