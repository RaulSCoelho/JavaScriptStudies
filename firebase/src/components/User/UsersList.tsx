"use client";

import { useForm } from "react-hook-form";
import { Button } from "../Buttons";
import { Input } from "../Input";
import { IoMdTrash as Trash } from "react-icons/io";
import { User } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserSchema } from "@/types/user";
import { useState } from "react";
import Loading from "@/app/loading";

interface Props {
  users?: User[];
}

export function UsersList({ users }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({ resolver: zodResolver(createUserSchema) });
  const [userList, setUserList] = useState<User[]>(users || []);
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(user: User) {
    setIsLoading(true);
    const res = await fetch("api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    const created: { user: User } = await res.json();
    setUserList(prev => [...prev, created.user]);
    setIsLoading(false);
  }

  async function handleDelete(id: string) {
    setIsLoading(true);
    await fetch(`api/users/${id}`, { method: "DELETE" });
    setUserList(prev => prev.filter(u => u.id !== id));
    setIsLoading(false);
  }

  return (
    <div>
      {isLoading && <Loading />}
      <h2 className="mb-4 text-2xl font-bold">User List</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <Input label="name" register={register("name")} error={errors.name?.message} />
          <Input label="email" register={register("email")} error={errors.email?.message} />
        </div>
        <Button type="submit" className="mt-4">
          Create User
        </Button>
      </form>
      {userList.length > 0 && (
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {userList.map(user => (
            <div
              key={user.id}
              className="relative flex flex-col items-center overflow-hidden rounded bg-skin-fill-secondary p-4 text-skin-base shadow"
            >
              <p className="break-all font-semibold">{user.name}</p>
              <p className="break-all font-semibold">{user.email}</p>
              <Trash
                size={22}
                className="absolute right-1 top-1 cursor-pointer text-red-500 hover:text-red-700"
                onClick={() => handleDelete(user.id)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
