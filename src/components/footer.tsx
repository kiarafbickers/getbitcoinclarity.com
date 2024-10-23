import Link from "next/link";

const navigation = {
  ideas: [
    { name: "Micro Articles", href: "https://kiarabickers.com/articles/" },
    { name: "Blog Videos", href: "/blog" },
  ],
  books: [{ name: "Bitcoin Clarity", href: "https://getbitcoinclarity.com/" }],
  links: [
    { name: "Twitter", href: "https://twitter.com/kiarabickers" },
    { name: "Instagram", href: "https://instagram.com/kiarabickers" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-950">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-6xl px-6 pb-8 pt-8 sm:pt-12 lg:px-8 lg:pt-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-6 xl:col-span-2">
            <h3 className="text-base font-semibold leading-7 text-gray-100">
              KIARA BICKERS
            </h3>
            <p className="hidden text-sm leading-6 text-gray-100 sm:block">
              Copyright &copy; {currentYear}. All Rights Reserved{" "}
              <Link href="/">Bitcoin Clarity</Link>
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:mt-0">
            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-100">
                Resources
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.ideas.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-gray-100 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold leading-6 text-gray-100">
                Links
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.links.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 text-gray-100 hover:text-white"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="block sm:hidden">
          <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
            <p className="text-xs leading-5 text-gray-100 text-center">
              Copyright &copy; {currentYear}. All Rights Reserved{" "}
              <Link href="/">Bitcoin Clarity</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
