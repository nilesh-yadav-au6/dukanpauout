import NavBar from "../components/NavBar";
import Table from "../components/Table";
import Card from "../components/Card";
import { ReactComponent as SearchIconLight } from "../assets/svg/SearchIconLight.svg";
import { ReactComponent as SortIcon } from "../assets/svg/SortIcon.svg";
import { ReactComponent as DownloadIcon } from "../assets/svg/DownloadIcon.svg";
import { ReactComponent as HelpWhite } from "../assets/svg/HelpWhite.svg";
import { ReactComponent as NextWhite } from "../assets/svg/NextWhite.svg";
import { ReactComponent as DropDown } from "../assets/svg/DropDown.svg";

function Payouts() {
  return (
    <div>
      <NavBar />
      <div className="p-8 bg-black-98">
        <section className="flex flex-col gap-6">
          <div className="flex justify-between items-center">
            <h5 className="body-5-galano font-galano text-black-12">
              Overview
            </h5>
            <button className="flex items-center gap-3 border border-black-85 rounded px-[14px] py-[6px] bg-white text-black-30 body-2-galano font-galano">
              This Month
              <DropDown />
            </button>
          </div>
          <div className="flex gap-5 flex-wrap">
            <div className="rounded-[8px] flex-grow hover:bg-[#0E4F82] bg-[#146EB4] text-white min-w-[300px]">
              <div className="p-5 flex flex-col gap-4">
                <p className="flex gap-3 items-center sub-title-regular text-black-100">
                  Next Payout
                  <HelpWhite />
                </p>
                <div className="flex justify-between items-center">
                  <p className="text-3xl text-black-100 body-3-galano font-galano">
                    ₹2,312.23
                  </p>
                  <p className="flex items-center font-medium text-base underline text-black-100 body-2-galano font-galano">
                    23 Orders
                    <NextWhite />
                  </p>
                </div>
              </div>
              <div className="px-6 py-2 bg-[#0E4F82] flex justify-between text-[#F2F2F2] rounded-[8px]">
                <p className="body-4-galano text-black-95 font-galano">
                  Next Payment Date:
                </p>
                <p className="body-4-galano text-black-95 font-galano">
                  Today, 4:00PM
                </p>
              </div>
            </div>
            <Card
              infoText="Amount Pending"
              amount="₹92,312.20"
              orders="13 Orders"
            />
            <Card infoText="Amount Processed" amount="₹23,92,312.19" />
          </div>
        </section>
        <section className="mt-8 mb-6">
          <p className="text-black-12 mb-6 body-5-galano font-galano">
            Transactions | This Month
          </p>
          <div className="flex">
            <p className="px-4 py-1.5 bg-black-90 rounded-full text-black-50 mr-4 body-text-2">
              Payouts (22)
            </p>
            <p className="px-4 py-1.5 bg-primary-blue rounded-full text-black-100 body-text-2">
              Refunds (6)
            </p>
          </div>
        </section>
        <section className="bg-black-100 p-3 rounded-lg">
          <div className="flex justify-between mb-3">
            <div className="flex items-center w-60 px-4 py-2.5 bg-black-100 rounded border border-solid border-black-85">
              <div className="mr-2">
                <SearchIconLight />
              </div>
              <input
                type="search"
                className="bg-black-100 text-black-60 body-4-galano font-galano outline-none w-full"
                placeholder="Order ID or transaction ID"
              />
            </div>
            <div className="flex">
              <p className="flex items-center text-black-30 sub-title-regular px-4 py-2.5 bg-black-100 rounded border border-solid border-black-85 mr-4">
                Sort
                <span className="ml-1.5">
                  <SortIcon />
                </span>
              </p>
              <div className="flex items-center px-4 py-2.5 bg-black-100 rounded border border-solid border-black-85">
                <DownloadIcon />
              </div>
            </div>
          </div>
          <Table />
        </section>
      </div>
    </div>
  );
}

export default Payouts;
