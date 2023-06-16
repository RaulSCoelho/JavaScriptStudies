"use client";

import { useForm } from "react-hook-form";
import { Button } from "../Buttons";
import { Input } from "../Input";
import { User } from "@prisma/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserSchema } from "@/types/user";

export function CreateUserForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<User>({ resolver: zodResolver(createUserSchema) });

  async function onSubmit(user: User) {
    const res = await fetch("api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });
    const created = await res.json();
    console.log(created);
  }

  return (
    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Input label="name" register={register("name")} error={errors.name?.message} />
        <Input label="email" register={register("email")} error={errors.email?.message} />
      </div>
      <Button type="submit" className="mt-4">
        Create User
      </Button>
    </form>
  );
}
