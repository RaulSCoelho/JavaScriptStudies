"use client";

import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";

export default function AuthLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  const { push } = useRouter();
  if (isAuthenticated) {
    push("/");
  }

  return <div className="flex h-screen w-screen items-center justify-center">{children}</div>;
}
