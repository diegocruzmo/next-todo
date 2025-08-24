"use client";

import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Page() {
  const { resolvedTheme } = useTheme();

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <Image src="/logo.svg" alt="logo" width={50} height={50} />
      <h2 className="text-2xl font-semibold">Welcome to your To-Do App 🚀</h2>
      <p>Sign in with your Google account</p>
      <SignIn
        appearance={{
          theme: resolvedTheme === "dark" ? dark : undefined,
        }}
      />
    </div>
  );
}
