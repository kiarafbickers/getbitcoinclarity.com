"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useTheme } from "next-themes";
import Image from "next/image";

const navigation = [
  {
    name: "Book",
    href: "https://www.amazon.com/Bitcoin-Clarity-Complete-Beginners-Understanding/dp/1733871209/",
  },
  { name: "Articles", href: "https://kiarabickers.com/articles/" },
  {
    name: "Newsletter",
    href: "https://kiarabickers.com/permissionless-leverage",
  },
  { name: "About", href: "/about" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-spring-wood-50 dark:bg-gray-950">
      <h1 className="sr-only">
        Bitcoin Clarity - A Complete Beginner&apos;s Guide to Understanding
        Bitcoin
      </h1>
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-6xl items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 ">
            <span className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
              KIARA BICKERS
            </span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-base leading-7 text-gray-900 dark:text-gray-100 border-b-2 border-transparent hover:border-spring-wood-200 dark:hover:border-gray-700"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button
            type="button"
            aria-label={
              mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"
            }
            onClick={() => setTheme(otherTheme)}
          >
            <Image
              src="/images/triangle-moon.png"
              alt={`Switch to ${otherTheme} mode`}
              width={50}
              height={50}
              className="w-full h-auto max-w-12 dark:invert"
            />
          </button>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-spring-wood-50 dark:bg-gray-800 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-cream-can-900/10 dark:sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="text-base font-semibold leading-7 text-gray-900 dark:text-gray-100">
                KIARA BICKERS
              </span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10 dark:divide-gray-700/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-gray-900 dark:text-gray-100"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <button
                  type="button"
                  aria-label={
                    mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"
                  }
                  onClick={() => setTheme(otherTheme)}
                >
                  <Image
                    src="/images/triangle-moon.png"
                    alt={`Switch to ${otherTheme} mode`}
                    width={50}
                    height={50}
                    className="w-full h-auto max-w-12 dark:invert"
                  />
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
