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
  // console.log(pathname);

  const disabledComponents = ["/404", "/login", "/register"];
  const disabledComponentSideBody = ["/menu"];
  return (
    <>
      {!disabledComponents.includes(pathname) && (
        <>
          <main className="flex">
            <Nav />
            <div className="block">
              {!disabledComponentSideBody.includes(pathname) ? (
                <>
                  <NavigationMenuDemo />
                  <MainBody width="w-[1000]">{children}</MainBody>
                </>
              ) : (
                <>
                  <NavigationMenuDemo />
                  <MainBody width="w-[1348px]">{children}</MainBody>
                </>
              )}
            </div>
            {!disabledComponentSideBody.includes(pathname) && <SideBody />}
          </main>
        </>
      )}
      {disabledComponents.includes(pathname) && <>{children}</>}
    </>
  );
};

export default AppShell;
