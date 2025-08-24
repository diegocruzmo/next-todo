import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex justify-between items-center p-4  m-6 border-t h-16">
      <div className="flex items-center gap-2">
        <Image src="/logo.svg" alt="logo" width={15} height={15} />
        <p className="text-sm">Your To-Do App 🚀</p>
      </div>
      <p className="text-sm text-slate-400">@ 2025 - Diego Cruz</p>
    </footer>
  );
}
