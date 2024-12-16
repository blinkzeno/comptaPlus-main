import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

import ProfileDropdown from "./ProfileDropdown";
import NotificationsDropdown from "./NotificationsDropdown";

const NavBar = () => {
  return (
    <header className="bg-white border-b p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Input
          type="search"
          placeholder="Rechercher..."
          className="w-64 mr-4"
          icon={<Search />}
        />
      </div>
      <div className="flex items-center space-x-4">
        <NotificationsDropdown />
        <ProfileDropdown />
      </div>
    </header>
  );
};

export default NavBar;
