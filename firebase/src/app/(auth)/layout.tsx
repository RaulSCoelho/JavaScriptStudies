"use client";

import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  if (isAuthenticated) {
    redirect("/");
  }

  return <>{children}</>;
}
