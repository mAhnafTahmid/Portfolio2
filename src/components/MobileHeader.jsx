import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MyAvatar from "@/assets/MyAvatar.png";

const MobileHeader = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between w-full px-7 py-3">
        <Link to="/">
          <Avatar className="w-8 h-10">
            <AvatarImage src={MyAvatar} />
            <AvatarFallback>AT</AvatarFallback>
          </Avatar>
        </Link>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">Menu</Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-full h-screen bg-white p-6">
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
            </SheetHeader>

            <div className="flex flex-col gap-4 mt-6 px-4 text-lg font-medium">
              <SheetClose asChild>
                <Link to="/education" className="hover:text-primary">
                  Education
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link to="/experience" className="hover:text-primary">
                  Experience
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link to="/publication" className="hover:text-primary">
                  Publication
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default MobileHeader;
