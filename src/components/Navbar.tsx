"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu as IconMenu, X } from "lucide-react"; 

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <div
      className={cn("fixed top-5 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <div className="flex justify-end md:hidden px-4">
        <button
          onClick={toggleMobileMenu}
          className="text-white bg-black p-2 rounded-md"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <IconMenu size={24} />}
        </button>
      </div>

      <div className={cn("mt-2", isMobileMenuOpen ? "block" : "hidden", "md:block md:mt-0")}>
        <Menu setActive={setActive} >
        <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
            </Link>          
            <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
              <HoveredLink href="/Services">All Services</HoveredLink>
            </div>
          </MenuItem>
          <Link href={"/contact"}>
          <MenuItem setActive={setActive} active={active} item="Contact Us">
          </MenuItem>
          </Link>
        </Menu>
      </div>
    </div>
  );
}

export default Navbar;
