import { RaiseErrors } from "@/components/Sentry/RaiseErrors";
import { UsersList } from "@/components/User/UsersList";
import { usersApi } from "@/lib/prisma/users";

export default async function Home() {
  const { users } = await usersApi.get();

  return (
    <div className="flex flex-col gap-5">
      <RaiseErrors />
      <hr />
      <UsersList users={users} />
    </div>
  );
}
