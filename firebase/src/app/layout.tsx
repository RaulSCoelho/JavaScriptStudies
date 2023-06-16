import "../styles/index.css";
import { ReactNode } from "react";
import { Inter } from "next/font/google";
import { ThemesProvider } from "@/hooks/useTheme";
import { AuthProvider } from "@/hooks/useAuth";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Home | Firebase",
    template: "%s | Firebase"
  },
  description: "First firebase app"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${inter.className} h-full scroll-smooth antialiased`}>
      <body className="bg-skin-fill text-skin-base" suppressHydrationWarning>
        <ThemesProvider>
          <AuthProvider>
            <div className="h-screen scrollbar scrollbar-track-transparent scrollbar-thumb-[#6b6b6b4b]">{children}</div>
          </AuthProvider>
        </ThemesProvider>
      </body>
    </html>
  );
}
