import React from "react";
import SideBarLayout from "./SideBar";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Drawer({ isOpen, setIsOpen }: Props) {
  return (
    <main
      className={
        " fixed overflow-hidden z-10 bg-black-90 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          "right-0 absolute bg-hover-blue h-full shadow-xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <article className="relative  pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <SideBarLayout />
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </main>
  );
}
