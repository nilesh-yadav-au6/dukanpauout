import { useState } from "react";
import "./styles/typography.css";
import SideBarLayout from "./components/SideBarLayout";
import Payouts from "./screens/Payouts";
import Drawer from "./components/SideDrawer";
import { SideBarToggleContext } from "./contexts/SideDrawerContext";

function App() {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <SideBarToggleContext.Provider value={{ toggle, setToggle }}>
        <SideBarLayout>
          <Payouts />
        </SideBarLayout>
      </SideBarToggleContext.Provider>
      <Drawer isOpen={toggle} setIsOpen={setToggle} />
    </div>
  );
}

export default App;
