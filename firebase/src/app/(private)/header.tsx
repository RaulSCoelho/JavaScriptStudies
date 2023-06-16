import { Logout } from "@/components/Buttons/Logout";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";

export function Header() {
  return (
    <div className="bg-skin-fill-primary flex w-full items-center justify-between p-4">
      <ThemeSwitcher />
      <Logout />
    </div>
  );
}
