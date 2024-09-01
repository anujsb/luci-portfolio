import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between fixed px-6 py-4 w-screen">
      <div className="">
        <Image
          src="/logo.png"
          width={100}
          height={100}
          alt="Picture of the author"
        />
      </div>
      <div>ham</div>
    </div>
  );
};

export default Navbar;
