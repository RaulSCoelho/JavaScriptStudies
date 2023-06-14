"use client";

import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function Home() {
  const { logout } = useAuth();
  const { push } = useRouter();

  async function handleLogout() {
    await logout();
    push("/login");
  }

  return (
    <div>
      <button
        onClick={handleLogout}
        className="rounded bg-skin-button p-2 text-white hover:bg-skin-button-hover"
      >
        Logout
      </button>
    </div>
  );
}
