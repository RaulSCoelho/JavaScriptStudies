"use client";

import { IoMdTrash as Trash } from "react-icons/io";
import { User } from "@prisma/client";

interface Props {
  user: User;
}

export function User({ user }: Props) {
  async function handleDelete() {
    await fetch(`api/users/${user.id}`, { method: "DELETE" });
  }

  return (
    <div className="relative flex flex-col items-center rounded bg-skin-fill-secondary p-4 text-skin-base shadow">
      <span className="font-semibold">{user.name}</span>
      <span className="font-semibold">{user.email}</span>
      <Trash
        size={22}
        className="absolute right-1 top-1 cursor-pointer text-red-500 hover:text-red-700"
        onClick={handleDelete}
      />
    </div>
  );
}
