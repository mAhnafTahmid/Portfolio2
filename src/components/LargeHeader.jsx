import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import MyAvatar from "@/assets/MyAvatar.png";

const LargeHeader = () => {
  return (
    <div className="flex items-center justify-between w-full px-7">
      <Link to="/">
        <Avatar className="w-8 h-10">
          <AvatarImage src={MyAvatar} />
          <AvatarFallback>AT</AvatarFallback>
        </Avatar>
      </Link>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                to="/education"
                className="hover:text-[#9daaf2] hover:scale-120"
              >
                Education
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                to="/experience"
                className="hover:text-[#9daaf2] hover:scale-120"
              >
                Experience
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                to="/publication"
                className="hover:text-[#9daaf2] hover:scale-120"
              >
                Publication
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                to="/skills"
                className="hover:text-[#9daaf2] hover:scale-120"
              >
                Skills
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link
                to="/projects"
                className="hover:text-[#9daaf2] hover:scale-120"
              >
                Projects
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};

export default LargeHeader;
