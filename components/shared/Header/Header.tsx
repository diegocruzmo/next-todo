"use client";

import Image from "next/image";

import { dark } from "@clerk/themes";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";

import { ModeToggle } from "@/components/shared/ModeToggle";

export function Header() {
  const { resolvedTheme } = useTheme();

  return (
    <header className="flex justify-between items-center p-4 border-b h-16 m-6">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <p className="md:text-xl">Your To-Do App 🚀</p>
      </div>

      <div className="flex justify-between items-center p-4 border-b h-16 gap-4">
        <ModeToggle />
        <SignedIn>
          <UserButton
            appearance={{
              theme: resolvedTheme === "dark" ? dark : undefined,
            }}
          />
        </SignedIn>
      </div>
    </header>
  );
}
