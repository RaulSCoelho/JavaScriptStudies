'use client'
import { useForm } from 'react-hook-form'

import { CreateUser } from '@/types/users'

import { trpc } from './Providers/TRPCProvider'

export function CreateUserForm() {
  const { register, handleSubmit } = useForm<CreateUser>()
  const createUser = trpc.users.create.useMutation()

  async function onSubmit(data: CreateUser) {
    try {
      const user = await createUser.mutateAsync(data)
      console.log(user)
    } catch (error) {
      console.error('Invalid form data:', error)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-96 rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-lg font-medium">Create User</h2>
      <div className="mb-4">
        <label htmlFor="name" className="mb-2 block font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full rounded-lg border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
          placeholder="Enter name"
          {...register('name')}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="username" className="mb-2 block font-medium text-gray-700">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full rounded-lg border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
          placeholder="Enter username"
          autoComplete="username"
          {...register('username')}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="mb-2 block font-medium text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full rounded-lg border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
          placeholder="Enter password"
          autoComplete="current-password"
          {...register('password')}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="mb-2 block font-medium text-gray-700">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full rounded-lg border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
          placeholder="Enter email"
          {...register('email')}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="phone_number" className="mb-2 block font-medium text-gray-700">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone_number"
          className="w-full rounded-lg border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
          placeholder="Enter phone number"
          {...register('phone_number')}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="birth_date" className="mb-2 block font-medium text-gray-700">
          Birth Date
        </label>
        <input
          type="date"
          id="birth_date"
          className="w-full rounded-lg border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
          placeholder="Enter birth date"
          {...register('birth_date', { setValueAs: value => new Date(value) })}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="gender" className="mb-2 block font-medium text-gray-700">
          Gender
        </label>
        <select
          id="gender"
          className="w-full rounded-lg border border-gray-300 p-2 focus:border-indigo-500 focus:outline-none"
          {...register('gender')}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="is_admin" className="block font-medium text-gray-700">
          <input type="checkbox" id="is_admin" className="mr-2 leading-tight" {...register('is_admin')} />
          <span className="text-sm">Is Admin?</span>
        </label>
      </div>
      <div className="text-center">
        <button type="submit" className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700">
          Create User
        </button>
      </div>
    </form>
  )
}
