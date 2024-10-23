import { baseUrl } from "@/lib/sitemap";

export const metadata = {
  title: "Federal Reserve Total Assets",
  alternates: {
    canonical: `${baseUrl}/data/fed-total-assets`,
  },
};

export default function FedTotalAssets() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300 px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <h2 className="text-3xl font-normal tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl">
          Federal Reserve Total Assets
        </h2>
        <div className="mt-8">
          <div id="container" className="h-96 flex items-center justify-center">
            <iframe
              className="responsive-iframe"
              src="https://fred.stlouisfed.org/graph/graph-landing.php?g=r2i3"
              loading="lazy"
              style={{ width: "100%", height: "100%", border: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
