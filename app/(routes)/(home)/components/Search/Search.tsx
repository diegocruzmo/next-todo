"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export function Search() {
  const handleSearch = () => {
    console.log("Search");
  };

  return (
    <div className="relative">
      <Input
        id="search"
        type="search"
        placeholder="Search..."
        className="w-36 sm:w-full border-2 text-sm"
      />
      <Button
        onClick={handleSearch}
        className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 cursor-pointer"
        variant={"ghost"}
      >
        <SearchIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}
