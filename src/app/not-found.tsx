"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();
  console.log(pathname);

  const disabledComponents = ["/404"];

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen w-[950px] ${
        disabledComponents.includes(pathname) &&
        "w-screen flex flex-col items-center justify-center min-h-screen"
      }`}
    >
      <h2 className="text-4xl font-bold text-gray-800 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">
        Sorry, we couldn't find the page you're looking for.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Return Home
      </Link>
    </div>
  );
}
