import SideBar1 from "./SideBar";

interface Props {
  children: JSX.Element;
}

function SideBarLayout({ children }: Props) {
  return (
    <>
      <div className="flex flex-row h-screen ">
        <SideBar1 />
        <div className="scroll-smooth w-full h-screen overflow-y-scroll">
          {children}
        </div>
      </div>
    </>
  );
}

export default SideBarLayout;
