import TabButton from "./TabButton";
import { ReactComponent as Home } from "../assets/svg/Home.svg";
import { ReactComponent as Analytics } from "../assets/svg/Analytics.svg";
import { ReactComponent as Appearance } from "../assets/svg/Appearance.svg";
import { ReactComponent as Audience } from "../assets/svg/Audience.svg";
import { ReactComponent as Delivery } from "../assets/svg/Delivery.svg";
import { ReactComponent as Discounts } from "../assets/svg/Discounts.svg";
import { ReactComponent as Marketing } from "../assets/svg/Marketing.svg";
import { ReactComponent as Orders } from "../assets/svg/Orders.svg";
import { ReactComponent as Payouts } from "../assets/svg/Payouts.svg";
import { ReactComponent as Plugins } from "../assets/svg/Plugins.svg";
import { ReactComponent as Products } from "../assets/svg/Products.svg";
import { ReactComponent as Logo } from "../assets/svg/Logo.svg";
import { ReactComponent as DownArrow } from "../assets/svg/DownArrow.svg";
import { ReactComponent as Purse } from "../assets/svg/Purse.svg";

const tabButton = [
  {
    title: "Home",
    prefixIcon: <Home />,
  },
  {
    title: "Orders",
    prefixIcon: <Orders />,
  },
  {
    title: "Products",
    prefixIcon: <Products />,
  },
  {
    title: "Delivery",
    prefixIcon: <Delivery />,
  },
  {
    title: "Marketing",
    prefixIcon: <Marketing />,
  },
  {
    title: "Analytics",
    prefixIcon: <Analytics />,
  },
  {
    title: "Payouts",
    prefixIcon: <Payouts />,
  },
  {
    title: "Discounts",
    prefixIcon: <Discounts />,
  },
  {
    title: "Audience",
    prefixIcon: <Audience />,
  },
  {
    title: "Appearance",
    prefixIcon: <Appearance />,
  },
  {
    title: "Plugins",
    prefixIcon: <Plugins />,
  },
];

function SideBarLayout() {
  return (
    <>
      <div
        className={`flex flex-col h-full justify-between py-4 px-2.5 bg-secondary-navbar fixed lg:sticky z-10 -translate-x-full  lg:translate-x-0 `}
      >
        <div className="">
          <div className="flex flex-row items-center mb-6 relative">
            <div className="mr-3">
              <Logo />
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-col">
                <p className="body-text-1 text-black-100">Nishyan</p>
                <p className="text-black-100 opacity-80 body-6-galano font-galano">
                  Visit store
                </p>
              </div>
              <DownArrow />
            </div>
          </div>
          <div>
            {tabButton.map((itm) => (
              <TabButton
                key={itm.title}
                title={itm.title}
                prefixIcon={itm.prefixIcon}
              />
            ))}
          </div>
        </div>
        <div className="px-3 py-1.5 bg-back-color rounded">
          <div className="flex flex-row">
            <Purse />
            <div className="flex flex-col ml-3">
              <p className="flex flex-row sub-body-regular opacity-80 text-black-100">
                Available credits
              </p>
              <p className="flex flex-row sub-title-medium text-black-100">
                222.10
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBarLayout;

SideBarLayout.defaultProps = {
  prefixIcon: null,
  title: "",
};
