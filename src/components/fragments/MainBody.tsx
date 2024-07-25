import React from "react";

interface MainBodyProps {
  children: React.ReactNode;
}

const MainBody: React.FC<MainBodyProps> = ({ children }) => {
  return (
    <div>
      <main className="bg-blue-100">
        <div
          className={`flex flex-wrap overflow-y-scroll h-[669px] w-[1000px] custom-scrollbar`}
        >
          {children}
        </div>
      </main>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 0px;
        }
        .custom-scrollbar {
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default MainBody;
