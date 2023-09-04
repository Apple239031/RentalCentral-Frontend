"use client";
import React, { useState } from "react";

const InvestorSection = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [temp, setTemp] = useState("YTD");

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    !isChecked ? setTemp("Lifetime") : setTemp("YTD");
  };
  return (
    <div className="h-[100%] divide-y  rounded-[12px] p-3 dark:bg-dark md:w-full">
      {/* <div className="flex flex-wrap"> */}
      <div className="flex h-[15%] justify-around pb-3 text-center text-lg">
        <p>Investor Information</p>
        <label className="autoSaverSwitch relative inline-flex cursor-pointer select-none items-center">
          <input
            type="checkbox"
            name="autoSaver"
            className="sr-only"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          <span
            className={`slider mr-3 flex h-[26px] w-[50px] items-center rounded-full p-1 duration-200 ${
              isChecked ? "bg-primary" : "bg-[#CCCCCE]"
            }`}
          >
            <span
              className={`dot h-[18px] w-[18px] rounded-full bg-white duration-200 ${
                isChecked ? "translate-x-6" : ""
              }`}
            ></span>
          </span>
        </label>
      </div>
      <div className="flex justify-around gap-2 p-3">
        {" "}
        <div className="grid gap-2">
          <div>{temp} Cash Flow Analysis: $0.00</div>
          <div>{temp} Cash on Cash Return: 0.00%</div>
          <div>{temp} Cap Rate: 0.00%</div>
        </div>
        <div className="grid gap-2">
          <div>{temp} Gross Rent Multiplier: 0.00</div>
          <div>{temp} Return on Investment: 0.00%</div>
          <div>{temp} Break-Even Ratio: 0.00%</div>
        </div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default InvestorSection;
