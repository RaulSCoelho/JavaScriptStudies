import { UsersList } from "@/components/User/UsersList";
import { usersApi } from "@/lib/prisma/users";

export default async function Home() {
  const { users } = await usersApi.get();
  return <UsersList users={users} />;
}
