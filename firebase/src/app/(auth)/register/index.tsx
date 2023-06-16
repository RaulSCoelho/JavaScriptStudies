"use client";

import { Input } from "@/components/Input";
import { SignUpRequest, signUpSchema } from "@/types/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpRequest>({ resolver: zodResolver(signUpSchema) });
  const { signUp } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  async function onSubmit({ email, password }: SignUpRequest) {
    try {
      setLoading(true);
      setError("");
      await signUp(email, password);
    } catch (err: any) {
      setError("Registration failed");
      console.log(err.message);
    }
    setLoading(false);
  }

  function handleLogin() {
    push("/login");
  }

  return (
    <div className="flex w-full max-w-[400px] flex-col justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-md border p-4">
        <h2 className="mb-4 text-center text-2xl font-bold">Create an account</h2>
        {error && (
          <span className="mb-4 block w-full rounded bg-red-200 px-3 py-2 font-medium text-red-900">{error}</span>
        )}
        <div className="mb-4 flex flex-col gap-4">
          <Input label="email" type="email" register={register("email")} error={errors.email?.message} />
          <Input label="password" type="password" register={register("password")} error={errors.password?.message} />
          <Input
            label="confirm password"
            type="password"
            register={register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`mt-2 w-full rounded p-2 ${loading ? "bg-gray-400" : "bg-skin-button hover:bg-skin-button-hover"}`}
        >
          Register
        </button>
      </form>
      <div className="mt-2 flex justify-center gap-2">
        <p>Already have an account?</p>
        <p className="cursor-pointer text-blue-400 underline" onClick={handleLogin}>
          Sign In
        </p>
      </div>
    </div>
  );
}
