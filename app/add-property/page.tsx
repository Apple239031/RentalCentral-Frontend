// import dayjs from "dayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";

const AddPropertyPage = () => {
  const roomList = (value: number) => (
    <option key={value} value={value + 1}>
      {value + 1}
    </option>
  );
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Address
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your address"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="bedrooms"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Bedrooms
                      </label>
                      <select
                        id="bedrooms"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                      >
                        {Array.from({ length: 10 }).map((_, index) =>
                          roomList(index)
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="bedrooms"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Bathrooms
                      </label>
                      <select
                        id="bathrooms"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                      >
                        {Array.from({ length: 10 }).map((_, index) =>
                          roomList(index)
                        )}
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="purchase_date"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Purchase Date
                      </label>
                      {/* <DatePicker defaultValue={dayjs("2022-04-17")} /> */}
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="purchase_price"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Purchase Price
                      </label>
                      <input
                        type="text"
                        placeholder="Enter purchase price"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="down_payment"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Down Payment
                      </label>
                      <input
                        type="text"
                        placeholder="Enter Down Payment"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="principalPaydownOption"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Do you know the monthly principal paydown?
                      </label>
                      <select
                        id="principalPaydownOption"
                        className="w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                      >
                        <option value="no" selected>
                          No
                        </option>
                        <option value="yes">Yes</option>
                        <option value="na">N/A</option>
                      </select>
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="currently_rented"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Currently Rented?
                      </label>
                      <input type="checkbox" className="dark:bg-[#242B51]" />
                    </div>
                  </div>

                  <div className="flex w-full flex-row-reverse px-4">
                    <button className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AddPropertyPage;
