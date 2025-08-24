import Image from "next/image";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Link href="/" className="flex items-center gap-2 mb-2">
        <Image src="/logo.svg" alt="logo" width={30} height={30} />
        <p className="text-lg">Your To-Do App 🚀</p>
      </Link>
      <h2>404 - Page Not Found</h2>
    </div>
  );
}
