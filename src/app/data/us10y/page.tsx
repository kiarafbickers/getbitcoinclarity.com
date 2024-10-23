import { baseUrl } from "@/lib/sitemap";

export const metadata = {
  title: "US10Y Chart",
  alternates: {
    canonical: `${baseUrl}/data/us10y`,
  },
};

export default function DataUs10y() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300 px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-normal tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          US10Y Chart
        </h2>
        <div className="mt-8">
          <div id="container" className="h-96 flex items-center justify-center">
            <iframe
              className="responsive-iframe"
              src="https://fred.stlouisfed.org/graph/graph-landing.php?g=r2hB"
              loading="lazy"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
        <h3 className="mt-8 text-xl font-semibold leading-8 dark:text-gray-200 sm:text-2xl">
          How does the 10-year bond work?
        </h3>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          A bond is a fixed income investment issued by a company or state.
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          <strong>Treasury bonds</strong> (T-bonds) are issued in term lengths
          ranging from a few days to 30 years, the longer the term of the loan
          agreement the higher the yield should be. <strong>Bond yield</strong>{" "}
          is the return realized on a bond.
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          The <strong>10-year Treasury bond</strong> is issued by the US
          treasury that pays out a fixed rate once every six months then pays
          the principal to the holder at maturity. The US10Y yield is somewhat
          special because it&apos;s correlated to the interest rate on home
          mortgages, auto loans, and even savings accounts in the U.S.
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          The function of Treasury bonds for the investor is to get a guaranteed
          rate of return, but the function of Treasury bonds for the government
          is to fund said government.
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          In the U.S. the scheme works like this: The Treasury issues the
          government&apos;s debt, and Federal Reserve (Fed) buys the debt with
          the debt they&apos;ve issued. For the Fed, that debt is the dollar.
          Yes, you read that right, the dollar is literally debt.
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          This back and forth trading of debt allows both entities to create the
          purchasing power to finance themselves and expand.
        </p>
        <h3 className="mt-16 text-xl font-semibold leading-8 dark:text-gray-200 sm:text-2xl">
          What is the relationship between bond rates and interest rates?
        </h3>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          The U.S. 10-year Treasury bond rate (US10Y) is not the same as the
          interest rates set by the Fed.
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          The federal funds rate (FFR) refers to the interest rate that banks
          charge other banks for lending to them cash overnight. The federal
          funds rate is set via committed by the Fed.
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          The 10-year T-bond yield isn’t directly set by the Fed but is by
          auction where the Fed is one of the most active buyers. The idea was
          that T-bonds should be priced by the market, but because the Fed is
          one of the biggest buyers of T-bonds they have a massive ability to
          distort this signal.
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          In general, when interest rates fall bond prices rise, and when
          interest rates rise bond prices fall.
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          When the Fed wants to stimulate the economy, they lower the federal
          funds rate to incentivize borrowing. The problem is that the federal
          funds rate was virtually zero from 2008 through 2016 and very little
          to stimulate the economy.
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          But it did increase liquidly for the dollar, making it easier for
          foreign investors to invest in the U.S. stock market and pump it to
          the moon. Lower interest rates are not great for the economy but are
          great for inflating asset prices in the stock markets.
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          And now that interest rates are so low there is pressure to keep them
          low, since bond investors may lose principal value on the bond if
          interest rates rise.
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          No publishers. No fancy agents. No book proposals. Just a couple of
          bitcoin contributors and me hanging out not eating Vegemite on a
          couch. These guys were complaining to me that most of the Bitcoin
          books out there were not exceptionally helpful, a lot of the popular
          books read more like technical manuals or as a copy of the Bitcoin
          Wiki. I offered to write a better book because I thought it sounded
          like fun. They thought it sounded like hell, but kindly agreed to help
          anyway.
        </p>
        <h3 className="mt-16 text-xl font-semibold leading-8 dark:text-gray-200 sm:text-2xl">
          Why is the 10-year yield so important?
        </h3>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          Bonds are generally described as a “risk-free” rate of return since
          their interest rate is guaranteed. However, if most investors grow the
          value of their assets relative to the rate of 2% inflation. This
          simply can’t be done with bond yields that have an interest rate lower
          than the rate of inflation.
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          Which is more likely to return more than 2% over the next 10 years: a
          Treasury bond with a 1% or shares of Amazon stock?
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          This is why the stock market is everything to the U.S. economy.
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          The entire system exists to pump the stock market higher.
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          Bonds pay too little, but stocks are too risky. So the Fed must
          eliminate the risk of being in the stock market. The Fed is the
          un-official and un-elected backer of every major U.S. corporation.
          None of them will be allowed to fail since the Fed is here to bail
          them all out.
        </p>
        <p className="mt-4 text-xl leading-8 dark:text-gray-400">
          Retirement accounts, hedge funds, billionaires all need a vehicle to
          save the purchasing power of their wealth. And the only suitable place
          is in the stock market of the world’s reserve currency.
        </p>
        <h3 className="mt-16 text-xl font-semibold leading-8 dark:text-gray-200 sm:text-2xl">
          The reality is that all of the world’s money has to be parked
          somewhere.
        </h3>
        <ul className="list-disc pl-6 mt-4 text-xl leading-8 space-y-4 dark:text-gray-400">
          <li>
            If the 10-year yield starts to drop, money is moving out of the
            risk-on environment of the stock market to the risk-off environment
            of bonds or cash.
          </li>
          <li>
            If the 10-year yield stabilizes or goes up, money moves from the
            risk-off environment of bonds and cashback into the risk-on
            environment of the stock market.
          </li>
        </ul>
      </div>
    </div>
  );
}
