import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function Navbar() {
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          {/* <TeamSwitcher />
          <MainNav className="mx-6" /> */}
          <h1 className="text-3xl font-bold tracking-tight">Picture Gallery</h1>
          <div className="ml-auto flex items-center space-x-4">
            {/* <Search />
            <UserNav /> */}
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>AQ</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
