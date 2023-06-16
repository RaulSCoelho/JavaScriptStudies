import { User } from "@/components/User";
import { CreateUserForm } from "@/components/User/CreateUserForm";
import { usersApi } from "@/lib/prisma/users";

export default async function Home() {
  const { users } = await usersApi.get();

  return (
    <>
      <CreateUserForm />
      {users && users.length > 0 && (
        <div className="mt-4 grid grid-cols-3 gap-4">
          {users.map(user => (
            <User key={user.id} user={user} />
          ))}
        </div>
      )}
    </>
  );
}
