import { SideBarToggleContext } from "../contexts/SideDrawerContext";
import { ReactComponent as Help } from "../assets/svg/Help.svg";
import { ReactComponent as Message } from "../assets/svg/Message.svg";
import { ReactComponent as DropDownArrow } from "../assets/svg/DropDownArrow.svg";
import { ReactComponent as SearchIconDark } from "../assets/svg/SearchIconDark.svg";
import { useContext } from "react";

function NavBar() {
  const context = useContext(SideBarToggleContext);
  return (
    <div className="flex bg-black-100 flex-row justify-between px-8 py-3 w-full border-b border-solid border-black-85">
      <button
        className="block lg:hidden mr-2"
        onClick={() => context?.setToggle(!context.toggle)}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 512 512"
          className="text-xl"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z"></path>
        </svg>
      </button>
      <div className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <h5 className="text-black-12 mr-4 heading5-galano font-galano">
            Payouts
          </h5>
          <div className="flex flex-row hidden sm:inline-flex items-center">
            <Help />
            <p className="ml-1.5 caption-regular-galano font-galano text-black-30">
              How it works?
            </p>
          </div>
        </div>
      </div>
      <div className="w-96 bg-black mx-4">
        <div className="flex items-center px-4 py-2.5 bg-black-95 rounded-md border-none">
          <div className="mr-2">
            <SearchIconDark />
          </div>
          <input
            type="search"
            className="bg-black-95 text-black-50 body-1-galano font-galano outline-none w-full"
            placeholder="Search features, tutorials, etc."
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="mr-3">
          <Message />
        </div>
        <DropDownArrow />
      </div>
    </div>
  );
}

export default NavBar;

NavBar.defaultProps = {
  prefixIcon: null,
  title: "",
};
