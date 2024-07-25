"use client";

import React from "react";
import Nav from "./Nav";
import MainBody from "./MainBody";
import SideBody from "./SideBody";
import { NavigationMenuDemo } from "./NavigationMenu";
import { usePathname } from "next/navigation";

type AppShellProps = {
  children: React.ReactNode;
};

const AppShell = (props: AppShellProps) => {
  const { children } = props;
  const pathname = usePathname();
  console.log(pathname);

  const disabledComponents = ["/404", "/login", "/register"];
  return (
    <>
      <main className="flex">
        {!disabledComponents.includes(pathname) && (
          <>
            <Nav />
            <div className="block">
              <NavigationMenuDemo />
              <MainBody>{children}</MainBody>
            </div>
            <SideBody></SideBody>
          </>
        )}
        {disabledComponents.includes(pathname) && <>{children}</>}
      </main>
    </>
  );
};

export default AppShell;
