import { createContext, useContext } from "react";

export type GlobalContent = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SideBarToggleContext = createContext<GlobalContent>({
  toggle: true,
  setToggle: () => {},
});
export const useGlobalContext = () => useContext(SideBarToggleContext);
