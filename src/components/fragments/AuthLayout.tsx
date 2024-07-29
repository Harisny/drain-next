import React, { ReactNode } from "react";

interface AuthLayoutProps {
  children: ReactNode;
  title: string;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title }) => {
  return (
    <div className="flex h-screen justify-center items-center bg-gray-100">
      <div className="w-full max-w-4xl bg-white p-8 rounded shadow-md flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-8">
          <h1 className="text-3xl font-bold text-center mb-4">{title}</h1>
          {children}
        </div>
        <div className="w-full md:w-1/2 p-8 flex justify-center items-center">
          <div className="w-40 h-40 md:w-64 md:h-64 relative">
            <img
              src="/choccyCaracal.jpg"
              alt="Side Image"
              className="w-full h-full object-contain rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
