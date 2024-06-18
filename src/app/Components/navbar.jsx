"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { AcmeLogo } from "./AcmeLogo";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [active, setActive] = React.useState(null);

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="full"
      position = "sticky"
      isBlurred = "false"
      className="flex w-full justify-evenly align-center flex-row w-screen bg-[#0000]"
    >
      <div className="lg:hidden">
        <NavbarContent className="dark sm:hidden" justify="start">
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          />
        </NavbarContent>
      </div>
      <div>
        <NavbarContent className=" pr-3" justify="center">
          <NavbarBrand>
            <AcmeLogo />
            <p className="font-bold text-inherit">ACME</p>
          </NavbarBrand>
        </NavbarContent>
      </div>
      <div>
        <NavbarContent className="hidden sm:flex gap-0" justify="center">
        </NavbarContent>
      </div>
      <div>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#" className="text-white text-xs">Login</Link>
          </NavbarItem>
          <NavbarItem>
            <Button as={Link} className = "bg-gradient-to-r from-[#4b2e83] to-[#9d71f7] text-[12px]" href="#" variant="flat">
              Sign Up
            </Button>
          </NavbarItem>
        </NavbarContent>
      </div>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
