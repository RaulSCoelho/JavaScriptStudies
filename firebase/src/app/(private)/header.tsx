import { Logout } from "@/components/Buttons/Logout";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export function Header() {
  return (
    <div className="flex w-full items-center justify-between bg-skin-fill-primary p-4">
      <ThemeSwitcher />
      <Logout />
    </div>
  );
}
