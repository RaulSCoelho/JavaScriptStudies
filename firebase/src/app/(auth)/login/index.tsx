"use client";

import { Input } from "@/components/Input";
import { SignInRequest, signInSchema } from "@/types/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

export function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInRequest>({ resolver: zodResolver(signInSchema) });
  const { signIn, signInWithGoogle } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { push } = useRouter();

  async function onSubmit({ email, password }: SignInRequest) {
    try {
      setLoading(true);
      setError("");
      await signIn(email, password);
    } catch {
      setError("Email or password incorrect");
    }
    setLoading(false);
  }

  function handleRegister() {
    push("/register");
  }

  async function loginWithGoogle() {
    try {
      setLoading(true);
      setError("");
      await signInWithGoogle();
    } catch {
      setError("Sign in with google failed");
    }
    setLoading(false);
  }

  return (
    <div className="flex w-full max-w-[400px] flex-col justify-center">
      <form onSubmit={handleSubmit(onSubmit)} className="rounded-md border p-4">
        <h2 className="mb-4 text-center text-2xl font-bold">Sign In</h2>
        {error && (
          <span className="mb-4 block w-full rounded bg-red-200 px-3 py-2 font-medium text-red-900">{error}</span>
        )}
        <div className="mb-4 flex flex-col gap-4">
          <Input label="email" type="email" register={register("email")} error={errors.email?.message} />
          <Input label="password" type="password" register={register("password")} error={errors.password?.message} />
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`mt-2 w-full rounded p-2 ${loading ? "bg-gray-400" : "bg-skin-button hover:bg-skin-button-hover"}`}
        >
          Sign In
        </button>
        <div className="my-2 flex items-center">
          <hr className="flex-grow" />
          <span className="px-2 text-gray-500">Or</span>
          <hr className="flex-grow" />
        </div>
        <button
          onClick={loginWithGoogle}
          disabled={loading}
          className="flex w-full items-center justify-center gap-4 rounded bg-white p-2 text-gray-500 shadow"
        >
          <FcGoogle size={24} />
          Sign in with Google
        </button>
      </form>
      <div className="mt-2 flex justify-center gap-2">
        <p>{"Don't have an account?"}</p>
        <p className="cursor-pointer text-blue-400 underline" onClick={handleRegister}>
          Create one
        </p>
      </div>
    </div>
  );
}
