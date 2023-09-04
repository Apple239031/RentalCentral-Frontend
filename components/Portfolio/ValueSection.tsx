import { DecreseIcon, RisingIcon } from "../icons";

const ValueSection = (porps) => {
  const { title, value, status } = porps;

  return (
    <div className="flex flex-col rounded-md bg-[#ffffff14] py-2 px-4">
      <div className="flex">
        <p className="text-[10px]">{title}</p>
      </div>
      <div className="flex w-full justify-between self-center">
        <p className="text-[25px]	font-bold">{value}</p>
        {status === "rising" ? <RisingIcon /> : <DecreseIcon />}
      </div>
    </div>
  );
};
export default ValueSection;
