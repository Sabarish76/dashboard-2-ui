import React from "react";
import Logo from "../../images/logo.png";
import { MdDashboard } from "react-icons/md";
import { BsFileBarGraphFill } from "react-icons/bs";
import { BsCompassFill } from "react-icons/bs";
import { TbMailFilled } from "react-icons/tb";
import { IoMdContact } from "react-icons/io";
import Image from "next/image";
const Layout = () => {
  return (
    <main className="w-[8%] hidden md:block min-h-screen shadow-2xl">
      <div>
        <Image src={Logo} alt="logo" className="w-20 ml-5 mt-5" />
      </div>
      <div className="text-center flex flex-col items-center justify-center text-emerald-200 text-4xl py-20 gap-10">
        <MdDashboard />
        <BsFileBarGraphFill />
        <TbMailFilled />
        <BsCompassFill />
        <IoMdContact />
      </div>
    </main>
  );
};

export default Layout;
