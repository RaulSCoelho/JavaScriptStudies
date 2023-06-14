"use client";

import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    redirect("/login");
  }

  return (
    <div className="flex gap-4">
      <ThemeSwitcher />
      {children}
    </div>
  );
}
