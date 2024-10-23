import TwitterEmbed from "@/components/twitter-embed";
import { baseUrl } from "@/lib/sitemap";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const europa = localFont({
  src: [
    {
      path: "../../fonts/europa-light-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../fonts/europa-lightitalic-webfont.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../../fonts/europa-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/europa-regularitalic-webfont.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../fonts/europa-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/europa-bolditalic-webfont.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-europa",
});

export const metadata = {
  title: "Bitcoin Book",
  alternates: {
    canonical: `${baseUrl}/book`,
  },
};

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300 px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <h2
          className={`${europa.className} text-3xl font-regular tracking-tight text-gray-900 text-center dark:text-gray-100 sm:text-4xl`}
        >
          Looking for Bitcoin Clarity?
        </h2>
        <Image
          src="/images/bitcoin-clarity-book.jpg"
          alt=" Audiobook"
          height={500}
          width={500}
          className="mt-8 mx-auto h-full w-full object-cover object-center"
          priority
        />
        <p className="mt-8 text-xl font-semibold leading-8 text-center dark:text-gray-200">
          Bitcoin Clarity is a collection of hard-hitting mental models to help
          you understand the complicated topic of Bitcoin. This book is a direct
          and honest approach to both; how Bitcoin works why it’s needed.
        </p>
        <div className="mt-8 flex justify-center">
          <Link
            href="https://www.amazon.com/dp/1733871209/ref=cm_sw_em_r_mt_dp_kxibGbNDRP5AC"
            className="inline-block border-0 px-3.5 py-2.5 text-cream-can-950 dark:text-cream-can-100 shadow-sm ring-1 ring-inset ring-cream-can-400 bg-cream-can-300 dark:bg-cream-can-600 text-sm font-semibold hover:bg-cream-can-200 dark:hover:bg-cream-can-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream-can-300 sm:leading-6 sm:px-16 sm:py-5"
            target="_blank"
          >
            Bitcoin Not Included
          </Link>
        </div>
        <h2
          className={`${europa.className} mt-16 text-3xl font-regular tracking-tight text-gray-900 text-center dark:text-gray-100 sm:text-4xl sm:mt-32`}
        >
          Read some Kind Tweets.
          <br />
          See? The internet can be nice.
        </h2>
        <TwitterEmbed />
      </div>
    </div>
  );
}
