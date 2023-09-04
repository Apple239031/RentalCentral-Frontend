"use client";
import SinglePortfolio from "@/components/Portfolio/SinglePortfolio";
import portfolioData from "@/components/Portfolio/portfolioData";
import BarChartPlot from "@/components/Portfolio/BarChartPlot";
import ValueSection from "@/components/Portfolio/ValueSection";
import Link from "next/link";

const Portfolio = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <h3 className="mb-4 text-center text-5xl font-bold text-black dark:text-white sm:text-2xl lg:text-5xl xl:text-5xl">
        Your Portfolio
      </h3>
      <div className="container">
        <div className="flex flex-wrap">
          <div className="flex w-full justify-center lg:w-1/3">
            <div className="flex flex-col flex-wrap gap-3">
              <p>Cash Inflow/Outflow</p>
              <select
                id="cash_inflow"
                className="outline-nonw w-full rounded-md border border-transparent py-3 px-6 text-base text-body-color shadow-one focus:border-primary focus-visible:shadow-one dark:bg-[#242B51]"
              >
                <option>Monthly</option>
                <option>Year To Date</option>
                <option>Lifetime</option>
              </select>
              {/* <BarChartPlot /> */}
            </div>
          </div>
          <div className="flex w-full items-center justify-center lg:w-1/3">
            <div className="mb-9 flex flex-col gap-2">
              <ValueSection status="rising" value="3" title="Properties" />
              <ValueSection status="rising" value="3" title="Units" />
            </div>
          </div>
          <div className="flex w-full items-center justify-center lg:w-1/3">
            <div className="mb-9 flex flex-col gap-2">
              <ValueSection
                status="rising"
                value="$1000"
                title="Portfolio Value"
              />
              <ValueSection
                status="rising"
                value="$200"
                title="Portfolio Debt"
              />
              <ValueSection status="rising" value="$0" title="Equity" />
            </div>
          </div>
        </div>
        <div className="flex flex-row-reverse justify-center px-4">
          <button className="sm:w-[200px rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 min-[320px]:w-full md:w-[200px] lg:w-[200px]">
            <Link href="/add-property">ADD PROPERTY</Link>
          </button>
        </div>
        <div className="flex flex-wrap justify-center">
          {portfolioData.map((portfolio) => (
            <div
              key={portfolio.id}
              className="w-full px-4 py-4 md:w-3/4 lg:w-1/2 xl:w-1/4"
            >
              <SinglePortfolio portfolio={portfolio} />
            </div>
          ))}
        </div>
        <div className="-mx-4 flex flex-wrap" data-wow-delay=".15s">
          <div className="w-full px-4">
            <ul className="flex items-center justify-center pt-8">
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  Prev
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  1
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  2
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  3
                </a>
              </li>
              <li className="mx-1">
                <a className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                  ...
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  12
                </a>
              </li>
              <li className="mx-1">
                <a
                  href="#0"
                  className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                >
                  Next
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
