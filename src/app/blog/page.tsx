import { baseUrl } from "@/lib/sitemap";
import { formatDate, getBlogPosts } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  alternates: {
    canonical: `${baseUrl}/blog`,
  },
};

export default function BlogPage() {
  const allBlogs = getBlogPosts();
  return (
    <section className="bg-white dark:bg-gray-950 border-y border-spring-wood-100 dark:border-gray-700/50 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center mb-8">
            <svg
              width="92"
              height="4"
              viewBox="0 0 92 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.14884 1.57442C3.14884 2.44395 2.44395 3.14884 1.57442 3.14884C0.704892 3.14884 0 2.44395 0 1.57442C0 0.704892 0.704892 0 1.57442 0C2.44395 0 3.14884 0.704892 3.14884 1.57442Z"
                fill="#B8AE84"
              ></path>
              <path
                d="M25.1907 1.57442C25.1907 2.44395 24.4858 3.14884 23.6163 3.14884C22.7468 3.14884 22.0419 2.44395 22.0419 1.57442C22.0419 0.704892 22.7468 0 23.6163 0C24.4858 0 25.1907 0.704892 25.1907 1.57442Z"
                fill="#B8AE84"
              ></path>
              <path
                d="M47.2326 1.57442C47.2326 2.44395 46.5277 3.14884 45.6582 3.14884C44.7887 3.14884 44.0838 2.44395 44.0838 1.57442C44.0838 0.704892 44.7887 0 45.6582 0C46.5277 0 47.2326 0.704892 47.2326 1.57442Z"
                fill="#B8AE84"
              ></path>
              <path
                d="M69.1488 1.57442C69.1488 2.44395 68.4439 3.14884 67.5744 3.14884C66.7049 3.14884 66 2.44395 66 1.57442C66 0.704892 66.7049 0 67.5744 0C68.4439 0 69.1488 0.704892 69.1488 1.57442Z"
                fill="#B8AE84"
              ></path>
              <path
                d="M91.1907 1.57442C91.1907 2.44395 90.4858 3.14884 89.6163 3.14884C88.7468 3.14884 88.0419 2.44395 88.0419 1.57442C88.0419 0.704892 88.7468 0 89.6163 0C90.4858 0 91.1907 0.704892 91.1907 1.57442Z"
                fill="#B8AE84"
              ></path>
            </svg>
          </div>
          <h2 className="text-2xl tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Getting Started With Bitcoin
          </h2>
        </div>
        <div className="mt-16 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {allBlogs
            .sort((a, b) => {
              if (
                new Date(a.metadata.publishedAt) >
                new Date(b.metadata.publishedAt)
              ) {
                return -1;
              }
              return 1;
            })
            .map((post) => (
              <article
                key={post.slug}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  {post.metadata.image ? (
                    <Image
                      src={post.metadata.image}
                      alt={post.metadata.title}
                      width={1920}
                      height={1280}
                      className="aspect-[16/9] w-full rounded-2xl bg-gray-100 dark:bg-gray-800 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    />
                  ) : (
                    <div className="aspect-[16/9] w-full rounded-2xl bg-gray-200 dark:bg-gray-700 flex items-center justify-center sm:aspect-[2/1] lg:aspect-[3/2]">
                      <span className="text-gray-500 dark:text-gray-300">
                        No Image Available
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10 dark:ring-white/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500 dark:text-gray-400">
                      {formatDate(post.metadata.publishedAt)}
                    </span>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                      <Link href={`/blog/${post.slug}`}>
                        <span className="absolute inset-0" />
                        {post.metadata.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                      {post.metadata.summary}
                    </p>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
