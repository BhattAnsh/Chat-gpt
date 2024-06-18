"use client"
import React from "react"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/app/Components/ui/sheet"
import { Button } from "@/app/Components/ui/button"
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/app/Components/ui/navbar-menu";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [active, setActive] = React.useState(null);
  return (
    <header className="flex flex-col justify-between w-full bg-white dark:bg-[#0000] shadow-sm">
      <div className="flex flex-row items-center justify-between md:justify-evenly h-16 px-4 md:px-6">
        <Link href="#" className="flex items-center" prefetch={false}>
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center justify-center">
        <Menu setActive={setActive} >
              <MenuItem setActive={setActive} active={active} item="Services">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/web-dev">Web Development</HoveredLink>
                  <HoveredLink href="/interface-design">
                    Interface Design
                  </HoveredLink>
                  <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
                  <HoveredLink href="/branding">Branding</HoveredLink>
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Products">
                <div className="  text-sm grid grid-cols-2 gap-10 p-0">
                  <ProductItem
                    title="Algochurn"
                    href="https://algochurn.com"
                    src="https://assets.aceternity.com/demos/algochurn.webp"
                    description="Prepare for tech interviews like never before."
                  />
                  <ProductItem
                    title="Tailwind Master Kit"
                    href="https://tailwindmasterkit.com"
                    src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                    description="Production ready Tailwind css components for your next project"
                  />
                  <ProductItem
                    title="Moonbeam"
                    href="https://gomoonbeam.com"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                    description="Never write from scratch again. Go from idea to blog in minutes."
                  />
                  <ProductItem
                    title="Rogue"
                    href="https://userogue.com"
                    src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                    description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                  />
                </div>
              </MenuItem>
              <MenuItem setActive={setActive} active={active} item="Resources">
                <div className="flex flex-col space-y-4 text-sm">
                  <HoveredLink href="/hobby">Hobby</HoveredLink>
                  <HoveredLink href="/individual">Individual</HoveredLink>
                  <HoveredLink href="/team">Team</HoveredLink>
                  <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                </div>
              </MenuItem>
              <div className="cursor-pointer hover:text-[#e1e1e1] transition ease-in-out">Pricing</div>
              <div className="cursor-pointer hover:text-[#e1e1e1] transition ease-in-out">Marketplace</div>
              <div className="cursor-pointer hover:text-[#e1e1e1] transition ease-in-out">Enterprise</div>
            </Menu>
        </nav>
        <div className="hidden md:flex flex-row gap-5 items-center justify-center">
        <Link href="#" className="text-white text-[15px]">Login</Link>
        <Button as={Link} className = "bg-gradient-to-r from-[#4b2e83] to-[#9d71f7] text-[12px]" href="#">
              Sign Up
            </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden bg-[#0000] border-none">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col items-start gap-6 p-6">
              <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
                Home
              </Link>
              <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
                About
              </Link>
              <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
                Features
              </Link>
              <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
                Pricing
              </Link>
              <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden">
        <nav className="flex justify-around bg-white dark:bg-gray-950 py-2 shadow-t">
          <Link href="#" className="flex flex-col items-center gap-1 text-sm font-medium" prefetch={false}>
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>
          <Link href="#" className="flex flex-col items-center gap-1 text-sm font-medium" prefetch={false}>
            <UserIcon className="h-5 w-5" />
            About
          </Link>
          <Link href="#" className="flex flex-col items-center gap-1 text-sm font-medium" prefetch={false}>
            <BriefcaseIcon className="h-5 w-5" />
            Features
          </Link>
          <Link href="#" className="flex flex-col items-center gap-1 text-sm font-medium" prefetch={false}>
            <DollarSignIcon className="h-5 w-5" />
            Pricing
          </Link>
          <Link href="#" className="flex flex-col items-center gap-1 text-sm font-medium" prefetch={false}>
            <MailIcon className="h-5 w-5" />
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function DollarSignIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function HomeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function UserIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
