interface Props {
  title: string;
  prefixIcon?: JSX.Element;
}

function TabButton({ title, prefixIcon }: Props) {
  return (
    <div
      className={`flex flex-row justify-start w-52 px-4 py-2 rounded ${
        title === "Payouts" && "bg-back-color"
      }`}
    >
      <div className="w-5 h-5 mr-4">{prefixIcon}</div>
      <p className="text-left text-black-100 body-text-2 opacity-80">{title}</p>
    </div>
  );
}

export default TabButton;

TabButton.defaultProps = {
  prefixIcon: null,
  title: "",
};
