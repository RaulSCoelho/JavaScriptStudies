"use client";

import { useAuth } from "@/hooks/useAuth";
import { ReactNode } from "react";
import { Header } from "./header";
import { useRouter } from "next/navigation";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  const { isAuthenticated } = useAuth();
  const { push } = useRouter();
  if (!isAuthenticated) {
    push("/login");
  }

  return (
    <>
      <Header />
      <div className="p-4">{children}</div>
    </>
  );
}
