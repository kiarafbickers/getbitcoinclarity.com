import Reviews from "@/components/reviews";
import Subscribe from "@/components/subscribe";
import { StarIcon } from "@heroicons/react/20/solid";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const europa = localFont({
  src: [
    {
      path: "../fonts/europa-light-webfont.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../fonts/europa-lightitalic-webfont.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "../fonts/europa-regular-webfont.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/europa-regularitalic-webfont.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../fonts/europa-bold-webfont.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/europa-bolditalic-webfont.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font-europa",
});

const features = [
  { name: "Bitcoin Focus" },
  { name: "Blockchain Basics" },
  { name: "Systems Thinking" },
  { name: "The Evolution of Accounting" },
  { name: "Adversarial Thinking" },
  { name: "Full Nodes & Validation" },
  { name: "Mining & Consensus" },
  { name: "What are Tokens?" },
  { name: '"Smart" Contracts' },
  { name: "Psychology & Mindset" },
];

export default function Home() {
  return (
    <div>
      <div className="relative bg-white dark:bg-gray-950">
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden sm:flex sm:flex-col"
        >
          <div className="relative w-full flex-1 bg-spring-wood-50 dark:bg-gray-950" />
          <div className="h-32 w-full bg-white dark:bg-gray-950 md:h-40 lg:h-48" />
        </div>

        <div className="relative mx-auto max-w-2xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col sm:hidden"
          >
            <div className="relative w-full flex-1 bg-spring-wood-50 dark:bg-gray-950" />
            <div className="h-48 w-full bg-white dark:bg-gray-950" />
          </div>
          <div className="relative py-12 sm:py-16 lg:py-24">
            <h2
              className={`${europa.className} text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl`}
            >
              Bitcoin Clarity &mdash; The Complete Beginners Guide to
              Understanding
            </h2>
          </div>
        </div>

        <div className="relative -mt-96 sm:mt-0">
          <div className="mx-auto max-w-sm">
            <Image
              alt="collection.imageAlt"
              src="/images/bitcoin-clarity-book.png"
              height={1325}
              width={1000}
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-950">
        <div className="mx-auto max-w-4xl py-12 px-6 sm:py-24 sm:px-8">
          <div className="bg-spring-wood-50 dark:bg-gray-900 px-6 py-16 text-center sm:px-16">
            <h2
              className={`${europa.className} mx-auto max-w-2xl text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl`}
            >
              Step 1: Get Your Copy of Bitcoin Clarity
            </h2>
            <div className="mt-8 flex items-center justify-center gap-x-6">
              <Link
                href="https://www.amazon.com/Bitcoin-Clarity-Complete-Beginners-Understanding/dp/1733871209/"
                className="w-full bg-cream-can-300 px-3.5 py-2.5 text-sm font-semibold text-cream-can-950 shadow-sm hover:bg-cream-can-200 dark:bg-cream-can-600 dark:hover:bg-cream-can-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream-can-300"
              >
                Amazon
              </Link>
              <Link
                href="https://www.amazon.com/Bitcoin-Clarity-Complete-Beginners-Understanding/dp/B08TT2TN2P/"
                className="w-full bg-cream-can-300 px-3.5 py-2.5 text-sm font-semibold text-cream-can-950 shadow-sm hover:bg-cream-can-200 dark:bg-cream-can-600 dark:hover:bg-cream-can-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream-can-300"
              >
                Audible
              </Link>
              <Link
                href="https://www.amazon.com/Bitcoin-Clarity-Understanding-Kiara-Bickers-ebook/dp/B07ZHY7RF8/"
                className="w-full bg-cream-can-300 px-3.5 py-2.5 text-sm font-semibold text-cream-can-950 shadow-sm hover:bg-cream-can-200 dark:bg-cream-can-600 dark:hover:bg-cream-can-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream-can-300"
              >
                Kindle
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-spring-wood-50 dark:bg-gray-900 py-12 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2
              className={`${europa.className} text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl`}
            >
              Why Learning about Bitcoin is valuable...
            </h2>
          </div>
        </div>
        <div className="relative pt-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div
              className="relative overflow-hidden w-full"
              style={{ paddingTop: "56.25%" }}
            >
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/7LDMWr2twmc"
                title="Why I Wrote Bitcoin Clarity"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-2xl px-6 sm:mt-16 lg:px-8">
          <p className="text-2xl leading-8 text-gray-600 dark:text-gray-300 text-center">
            10 Things This Book Will Teach You
          </p>
          <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-300 text-center">
            Learn about...
          </p>
          <dl className="mt-16 space-y-4 sm:space-y-0 sm:grid sm:grid-rows-5 sm:grid-flow-col gap-8 text-lg leading-7 text-gray-600 dark:text-gray-300">
            {features.map((feature, index) => (
              <div key={feature.name} className="relative pl-10">
                <dt className="inline font-semibold text-gray-900 dark:text-gray-100">
                  <div className="absolute left-0 top-0 flex items-center justify-center h-7 w-7 rounded-full bg-cream-can-300">
                    <span className="text-xs font-bold leading-none text-cream-can-950">
                      {index + 1}
                    </span>
                  </div>
                  {feature.name}
                </dt>
              </div>
            ))}
          </dl>
          <p className="mt-8 text-lg leading-8 text-gray-600 dark:text-gray-300 text-center">
            ...and much more
          </p>
        </div>
      </div>

      <Image
        alt="bitcoin-clarity-book-1.png"
        src="/images/bitcoin-clarity-book-1.png"
        height={2880}
        width={1920}
        priority
        className="h-full w-full object-cover"
      />
      <div className="bg-white dark:bg-gray-950 py-12 sm:py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <h2
            className={`${europa.className} text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 text-center sm:text-3xl`}
          >
            About Kiara Bickers
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            I am the creator of this little site you&apos;re hanging out in.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            When I wanted to learn more about Bitcoin I spent a few years
            studying economics and markets, a few more years learning how to
            code before realizing that none of that information was all that
            helpful for understanding Bitcoin. I had made a fairly time
            consuming wrong turn...
          </p>
        </div>
      </div>

      <Image
        alt="bitcoin-clarity-book-2.png"
        src="/images/bitcoin-clarity-book-2.png"
        height={2880}
        width={1920}
        priority
        className="h-full w-full object-cover"
      />
      <div className="bg-white dark:bg-gray-950 py-12 sm:py-24">
        <div className="mx-auto max-w-2xl px-6 lg:px-8">
          <h2
            className={`${europa.className} text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 text-center sm:text-3xl`}
          >
            Why Bitcoin Clarity?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Let&apos;s be honest, most people aren&apos;t buying into Bitcoin
            because they expect to use it peer-to-peer. Most people are buying
            it for the hype. Hype draws people in like flies on a dead possum.
            Which is to say, that once people are drawn in, they don&apos;t care
            what brought them there.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            If you want a straight-forward way to separate the signal from the
            hype, to understand Bitcoin as a system, I&apos;ve put together
            Bitcoin Clarity to explain everything you need to know with the
            beauty of{" "}
            <Link
              href="https://www.youtube.com/watch?v=oUBQPIk9Wh8"
              className="border-b-2 border-spring-wood-50-300 hover:text-spring-wood-300 dark:hover:text-spring-wood-300"
              target="_blank"
            >
              Vivaldi&apos;s storm
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="relative bg-white dark:bg-gray-950 pb-12 sm:pb-24">
        <div
          aria-hidden="true"
          className="absolute inset-0 hidden sm:flex sm:flex-col"
        >
          <div className="relative w-full flex-1 bg-spring-wood-50 dark:bg-gray-950" />
          <div className="h-32 w-full bg-white dark:bg-gray-950 md:h-40 lg:h-48" />
        </div>
        <div className="relative mx-auto max-w-2xl px-4 pb-96 text-center sm:px-6 sm:pb-0 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-0 flex flex-col sm:hidden"
          >
            <div className="relative w-full flex-1 bg-spring-wood-50 dark:bg-gray-950" />
            <div className="h-48 w-full bg-white dark:bg-gray-950" />
          </div>
          <div className="relative py-12 sm:py-24">
            <h2
              className={`${europa.className} text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl`}
            >
              Bitcoin Clarity — The Complete Beginners Guide to Understanding
            </h2>
          </div>
        </div>
        <div className="relative -mt-96 sm:mt-0">
          <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-6xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
            <figure className="mx-auto max-w-2xl text-center p-6 sm:p-8">
              <p className="sr-only">5 out of 5 stars</p>
              <div className="flex gap-x-1 text-cream-can-300 justify-center">
                <StarIcon aria-hidden="true" className="h-5 w-5 flex-none" />
                <StarIcon aria-hidden="true" className="h-5 w-5 flex-none" />
                <StarIcon aria-hidden="true" className="h-5 w-5 flex-none" />
                <StarIcon aria-hidden="true" className="h-5 w-5 flex-none" />
                <StarIcon aria-hidden="true" className="h-5 w-5 flex-none" />
              </div>
              <blockquote className="mt-8 text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-9">
                <p>&quot;My new go-to recommendation.&quot;</p>
              </blockquote>
              <figcaption className="mt-2">
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    Kaz
                  </div>
                  <div className="mt-0.5 text-gray-600 dark:text-gray-300">
                    Down The Rabbit Hole Podcast
                  </div>
                </div>
              </figcaption>
            </figure>
            <Image
              alt="collection.imageAlt"
              src="/images/bitcoin-clarity-book.png"
              height={1325}
              width={1000}
              className="h-full w-full object-cover object-center order-first sm:order-none sm:col-span-1"
              priority
            />
            <figure className="mx-auto max-w-2xl text-center p-6 sm:p-8">
              <p className="sr-only">5 out of 5 stars</p>
              <div className="flex gap-x-1 text-cream-can-300 justify-center">
                <StarIcon aria-hidden="true" className="h-5 w-5 flex-none" />
                <StarIcon aria-hidden="true" className="h-5 w-5 flex-none" />
                <StarIcon aria-hidden="true" className="h-5 w-5 flex-none" />
                <StarIcon aria-hidden="true" className="h-5 w-5 flex-none" />
                <StarIcon aria-hidden="true" className="h-5 w-5 flex-none" />
              </div>
              <blockquote className="mt-8 text-xl font-semibold leading-8 tracking-tight text-gray-900 dark:text-gray-100 sm:text-2xl sm:leading-9">
                <p>&quot;My new go-to recommendation.&quot;</p>
              </blockquote>
              <figcaption className="mt-2">
                <div className="text-sm leading-6">
                  <div className="font-semibold text-gray-900 dark:text-gray-100">
                    Judith Black
                  </div>
                  <div className="mt-0.5 text-gray-600 dark:text-gray-300">
                    CEO of Workcation
                  </div>
                </div>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div className="relative bg-white dark:bg-gray-950 pb-12 sm:pb-24">
        <Reviews />
      </div>

      <Image
        alt="bitcoin-clarity-book-2.png"
        src="/images/bitcoin-clarity-book-3.png"
        height={2880}
        width={1920}
        priority
        className="h-full w-full object-cover"
      />
      <div className="bg-spring-wood-50 dark:bg-gray-900 py-12 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2
            className={`${europa.className} text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl`}
          >
            Step 2: Join The Inner Circle.
          </h2>
          <p className="mt-6 text-xl leading-8 text-gray-600 dark:text-gray-300">
            This is the closest a newsletter will ever get to mailing you
            bitcoin.
          </p>
          <Subscribe />
        </div>
      </div>
    </div>
  );
}
