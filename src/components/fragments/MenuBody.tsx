import React from "react";

interface CardDemoProps {
  children: React.ReactNode;
}

const MenuBody = ({ children }: CardDemoProps) => {
  return (
    <>
      <div className="flex items-center justify-around h-[580px] m-2">
        {children}
      </div>
    </>
  );
};

export default MenuBody;
