const TenantSection = () => {
  return (
    <div className="w-1/2 divide-y rounded-[12px]  dark:bg-dark md:w-full">
      {/* <div className="flex flex-wrap"> */}
      <div className="h-[15%] text-center">
        <p>Tenant Information</p>
      </div>
      <div className="p-3">
        {" "}
        <div>Name: None</div> <div>Email: None</div> <div>Phone: None</div>
        <div>Notes: None</div>
      </div>

      {/* </div> */}
    </div>
  );
};

export default TenantSection;
