import { Portfolio } from "@/types/portfolio";
import Image from "next/image";
import Link from "next/link";

const SinglePortfolio = ({ portfolio }: { portfolio: Portfolio }) => {
  const { address, currentValue, loan, image } = portfolio;
  return (
    <>
      <div
        className="relative overflow-hidden rounded-md bg-white shadow-one dark:bg-dark"
        data-wow-delay=".1s"
      >
        <Link
          href="/portfolio-details"
          className="relative block h-[220px] w-full"
        >
          <Image src={image} alt="image" fill />
        </Link>

        <div className="p-6 text-center sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            <Link
              href="/"
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            >
              {address}
            </Link>
          </h3>
          <div className="flex items-center justify-center">
            <div className="mr-5 flex items-center border-r border-body-color border-opacity-10 pr-5 dark:border-white dark:border-opacity-10 xl:mr-3 xl:pr-3 2xl:mr-5 2xl:pr-5">
              <div className="w-full">
                <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                  Current Value
                </h4>
                <p className="text-xs text-body-color">{currentValue}</p>
              </div>
            </div>
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Loan
              </h4>
              <p className="text-xs text-body-color">{loan}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePortfolio;
