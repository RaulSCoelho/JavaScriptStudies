import "../styles/index.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { ThemesProvider } from "@/hooks/useTheme";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Home | Firebase",
    template: "%s | Firebase",
  },
  description: "First firebase app",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.className} h-full scroll-smooth antialiased`}
    >
      <body className="bg-skin-fill">
        <ThemesProvider>
          <ThemeSwitcher />
          <div className="scrollbar scrollbar-track-transparent scrollbar-thumb-[#6b6b6b4b]">
            {children}
          </div>
        </ThemesProvider>
      </body>
    </html>
  );
}
