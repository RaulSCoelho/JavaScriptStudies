"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export function Logout() {
  const { logout } = useAuth();
  const { push } = useRouter();

  async function handleLogout() {
    await logout();
    push("/login");
  }

  return (
    <button onClick={handleLogout} className="rounded bg-skin-button p-2 font-medium hover:bg-skin-button-hover">
      Logout
    </button>
  );
}
