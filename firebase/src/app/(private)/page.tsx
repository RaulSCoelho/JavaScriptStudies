"use client";

import { useAuth } from "@/hooks/useAuth";

export default function Home() {
  const { logout } = useAuth();

  return (
    <div>
      <button
        onClick={logout}
        className="rounded bg-skin-button p-2 text-white hover:bg-skin-button-hover"
      >
        Logout
      </button>
    </div>
  );
}
