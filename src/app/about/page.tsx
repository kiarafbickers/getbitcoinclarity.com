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
  title: "About",
  alternates: {
    canonical: `${baseUrl}/about`,
  },
};

export default function About() {
  return (
    <div className="bg-white dark:bg-gray-950">
      <div aria-hidden="true" className="relative">
        <Image
          alt="kiara-bickers-office.jpg"
          src="/images/kiara-bickers-office.jpg"
          height={1316}
          width={2000}
          className="h-full w-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950" />
      </div>
      <div className="relative mx-auto -mt-24 max-w-3xl px-4 sm:-mt-36 sm:px-6 pb-14 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className={`${europa.className} text-3xl font-bold tracking-tight text-white dark:text-gray-100 sm:text-4xl`}
          >
            Hi, I&apos;m Kiara Bickers
          </h2>
          <p className="text-lg leading-7 text-white dark:text-gray-300">
            Author, & Creator of Bitcoin Clarity
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300 px-4 py-12 sm:px-6 lg:px-8 lg:py-24">
        <h2
          className={`${europa.className} text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl`}
        >
          The Bitcoin Clarity Story
        </h2>
        <h3 className="mt-8 text-xl font-semibold leading-8 dark:text-gray-200">
          It&apos;s 2018, and I called B.S. on cryptocurrency.
        </h3>
        <p className="mt-2 text-xl leading-8 dark:text-gray-400">
          Crypto is taking off. People are going full hype on altcoins, tokens,
          and ICOs. There were only two ways to look at Bitcoin: as “muh
          libertarian” coin or as a disruptive, peer-to-peer, immutable
          distributed ledger series of overrated buzzwords. I couldn&apos;t
          believe there wasn&apos;t a more complete approach to Bitcoin as a
          system. Maybe I was a little naïve, but I decided to stop complaining
          and try to provide a better explanation for myself.
        </p>
        <h3 className="mt-8 text-xl font-semibold leading-8 dark:text-gray-200">
          Bitcoin Clarity started on a couch in Australia.
        </h3>
        <p className="mt-2 text-xl leading-8 dark:text-gray-400">
          No publishers. No fancy agents. No book proposals. Just a couple of
          bitcoin contributors and me hanging out not eating Vegemite on a
          couch. These guys were complaining to me that most of the Bitcoin
          books out there were not exceptionally helpful, a lot of the popular
          books read more like technical manuals or as a copy of the Bitcoin
          Wiki. I offered to write a better book because I thought it sounded
          like fun. They thought it sounded like hell, but kindly agreed to help
          anyway.
        </p>
        <h3 className="mt-8 text-xl font-semibold leading-8 dark:text-gray-200">
          Asking questions on #bitcoin IRC until 6AM
        </h3>
        <p className="mt-2 text-xl leading-8 dark:text-gray-400">
          With no B.S. Bitcoin is complicated, but it doesn&apos;t need to be as
          complicated as everyone is making it out to be. There are a few
          insanely intelligent people in this industry, but often they are too
          deep into an analytical way of thinking to explain this stuff at an
          appropriate level for new users. No, Johnny, Grandma doesn&apos;t need
          to know how her private key translates into binary format. And for the
          record, that does not qualify as an &quot;Easy to Understand&quot;
          overview on Bitcoin.
        </p>
        <h3 className="mt-8 text-xl font-semibold leading-8 dark:text-gray-200">
          Knowing how to think differently.
        </h3>
        <p className="mt-2 text-xl leading-8 dark:text-gray-400">
          Copying and mimicking others is an innate human skill. We copy each
          other to learn, but people also copy to gain social status by
          mirroring the values of the tribe. With Bitcoin Clarity, I wanted to
          develop a new way of thinking, and not repeat the same facts that can
          be limited in usefulness. To think differently requires learning how
          to think, to concentrate on one thing long enough to develop a new way
          of thinking takes time and focus.
        </p>
        <h3 className="mt-8 text-xl font-semibold leading-8 dark:text-gray-200">
          I can get obsessive.
        </h3>
        <p className="mt-2 text-xl leading-8 dark:text-gray-400">
          I sketched out hundreds of diagrams to help explain this system
          visually. Then I had actual{" "}
          <Link
            href="https://www.instagram.com/jordan.wesolek/"
            target="_blank"
            className="border-b-2 border-spring-wood-50-300 hover:text-spring-wood-300 dark:hover:text-spring-wood-300"
          >
            artist from my local coffee shop
          </Link>{" "}
          of resketch my drawings into digital hand-drawn micro-master pieces. I
          have high standards, and I&apos;m always working to improve, little by
          little. I add new images to the book with each version and{" "}
          <Link
            href="https://www.youtube.com/playlist?list=PL-DSKYgOHhD6iPITFkBCVMij_Oc2-5m-f"
            target="_blank"
            className="border-b-2 border-spring-wood-50-300 hover:text-spring-wood-300 dark:hover:text-spring-wood-300"
          >
            animate the sketches from the book into videos
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
