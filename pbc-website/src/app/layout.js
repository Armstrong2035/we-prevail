import { colors } from "./styles";
export const metadata = {
  title: "The Prevailing and Borderless Church",
  description:
    "This is the official website of the Prevailing and Borderless Church",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: colors.primaryBackground }}>
        {children}
      </body>
    </html>
  );
}
