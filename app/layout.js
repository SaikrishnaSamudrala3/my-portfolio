// app/layout.js
import "./globals.css";
import { Outfit, Ovo } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata = {
  title: "My Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}>
        {/* Set theme BEFORE React hydrates to avoid flash/mismatch */}
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function () {
  try {
    var s = localStorage.getItem('theme');
    var dark = s ? s === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.documentElement.classList.toggle('dark', dark);
  } catch (e) {}
})();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
