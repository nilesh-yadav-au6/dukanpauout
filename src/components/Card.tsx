import { ReactComponent as Help } from "../assets/svg/Help.svg";
import { ReactComponent as Next } from "../assets/svg/Next.svg";

interface Props {
  infoText: string;
  amount: string;
  orders?: string;
}

function Card({ infoText, amount, orders }: Props) {
  return (
    <div className="flex-grow rounded-[8px] bg-white p-5 flex flex-col gap-4 shadow-sm h-fit min-w-[300px]">
      <h5 className="flex gap-3 items-center text-black-30 sub-body-regular">
        {infoText}
        <Help />
      </h5>
      <div className="flex justify-between items-center">
        <p className="text-black-12 body-3-galano font-galano">{amount}</p>
        <p className="flex items-center body-2-galano font-galano underline text-primary-blue">
          {orders}
          {orders && <Next />}
        </p>
      </div>
    </div>
  );
}

export default Card;
