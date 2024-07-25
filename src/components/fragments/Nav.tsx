import Link from "next/link";
import { usePathname } from "next/navigation";

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className=" bg-blue-400 p-5 pr-8 h-screen w-[750px] flex flex-col justify-between">
      <div>
        <div className="flex items-center flex-shrink-0 text-white mb-16">
          <span className="font-bold text-xl -tracking-tighter text-blue-100">
            DRAIN TECH
          </span>
        </div>
        <div className="items-center flex-shrink-0 text-white relative">
          <ul className="space-y-4">
            <li
              className={`${
                pathname === "/" ? "text-blue-300" : "text-blue-100"
              } hover:text-blue-300 font-medium text-lg`}
            >
              <Link href={"/"}>Home</Link>
            </li>
            <li
              className={`${
                pathname === "/about" ? "text-blue-300" : "text-blue-100"
              } hover:text-blue-300 font-medium text-lg`}
            >
              <Link href={"/about"}>About</Link>
            </li>
            <li
              className={`${
                pathname === "/cart" ? "text-blue-300" : "text-blue-100"
              } hover:text-blue-300 font-medium text-lg`}
            >
              <Link href={"/cart"}>Cart</Link>
            </li>
            <li
              className={`${
                pathname === "/profil" ? "text-blue-300" : "text-blue-100"
              } hover:text-blue-300 font-medium text-lg`}
            >
              <Link href={"/profil"}>Profil</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="items-center flex-shrink-0 text-white relative">
        <a href="/setting" className="text-blue-100 hover:text-blue-300">
          Settings
        </a>
      </div>
    </nav>
  );
};

export default Nav;
