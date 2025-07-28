import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="w-full p-4 shadow-lg">
      <div className="bg-[#F9FAFB] rounded-full px-6 flex w-full justify-between items-center">
        <div className="flex items-center">
          <Image
            src="/assets/transparentLogo.png"
            alt="Kodro Logo"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
        </div>
        {/* Future navigation items can go here */}
      </div>
    </nav>
  );
};

export default Navbar;
