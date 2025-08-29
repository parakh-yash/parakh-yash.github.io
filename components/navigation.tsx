"use client";

import * as React from "react";
import Link from "next/link";
import { Menu as MenuIcon, X as CloseIcon } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ModeToggle from "./mode-toggel";

export function NavigationMenuDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <nav className="relative w-full h-13 sticky top-0 z-50 bg-background">
      {/* Hamburger button for mobile */}
      <button
        className="sm:hidden p-3 rounded focus:outline-none"
        onClick={() => setOpen((prev) => !prev)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <CloseIcon size={24} /> : <MenuIcon size={24} />}
      </button>

      <div className="sm:hidden top-2 right-2  absolute">
        <ModeToggle />
      </div>

      <div className="top-2 start-12 absolute">
        <Link href="/"><h1 className="text-2xl">Yash Parakh</h1></Link>
        
      </div>

      {/* Navigation menu */}
      <div
        className={`
          ${open ? "block" : "hidden"}
          absolute top-12 left-0 w-full bg-background sm:pt-2 sm:px-5 sm:static sm:flex sm:flex-row-reverse
        `}
      >
        <NavigationMenu viewport={false}>
          <NavigationMenuList className="flex flex-col items-start sm:flex-row sm:w-full">
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/resume">Resume</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/projects">Projects</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="hidden sm:block">
              <ModeToggle />
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
}
