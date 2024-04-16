import type { Metadata } from "next";
import { josefin_sans } from "./fonts/index";
import "./css/globals.css";
import Header from "./components/Header";
import Attribution from "./components/Attribution";
import { Providers } from "./providers";
import Notice from "./components/Notice";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Todo App solution by daHatta - Challenge by Frontend Mentor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link
        rel="icon"
        href="./favicon-32x32.png"
        type="image/png"
        sizes="32x32"
      />
      <body className={`${josefin_sans.className}`}>
        <Providers>
          <div className="w-[375px] m-auto px-[24px] 2xl:w-[540px] 2xl:px-0">
            <Header />
            {children}
            <Notice />
            <Attribution />
          </div>
        </Providers>
      </body>
    </html>
  );
}
