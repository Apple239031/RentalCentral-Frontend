const Analyze = () => {
  return (
    <section className="relative z-10 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]">
      <div className="container flex flex-col items-center space-y-4 ">
        <div>Search Properties</div>
        <div className="w-1/2">
          <form className="items-center">
            <label htmlFor="voice-search" className="sr-only">
              Search
            </label>
            <div className="flex w-full flex-wrap gap-2">
              <div className="relative md:w-full xl:w-[80%] 2xl:w-[80%]">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="text-gray-500 dark:text-gray-400 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 21"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
                    />
                  </svg>
                </div>

                <input
                  type="text"
                  id="voice-search"
                  className="block w-full rounded-md border border-transparent p-2.5 pl-10 text-base text-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51]"
                  placeholder="Search Address..."
                  required
                />

                <button
                  type="button"
                  className="absolute inset-y-0 right-0 flex items-center pr-3"
                >
                  <svg
                    className="text-gray-500 dark:text-gray-400 hover:text-gray-900 h-4 w-4 dark:hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
                    />
                  </svg>
                </button>
              </div>
              <div className="min-[320px]:w-full sm:w-full md:w-full xl:w-[18%] 2xl:w-[18%]">
                <button
                  type="submit"
                  className=" inline-flex w-full items-center rounded-md bg-primary py-2.5 px-3 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                  <svg
                    className="mr-2 h-4 w-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Analyze;
