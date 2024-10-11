import "./global.css";
import { Mulish } from "next/font/google";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{}}>{children}</body>
    </html>
  );
}
