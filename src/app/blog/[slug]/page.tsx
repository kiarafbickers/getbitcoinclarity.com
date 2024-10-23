import { CustomMDX } from "@/components/mdx";
import { baseUrl } from "@/lib/sitemap";
import { formatDate, getBlogPosts, getRelatedPosts } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Params {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Params) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }: Params) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post.slug);

  return (
    <section className="bg-white dark:bg-gray-950 px-6 py-12 sm:py-24 lg:px-8">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700 dark:text-gray-300">
        <h1 className="title font-semibold text-2xl tracking-tighter text-gray-900 dark:text-white">
          {post.metadata.title}
        </h1>
        <div className="mt-2 flex items-center gap-x-4 text-xs">
          <span className="text-gray-500 dark:text-gray-400">
            {formatDate(post.metadata.publishedAt)}
          </span>
        </div>
        <article className="mt-8 prose dark:prose-invert">
          <CustomMDX source={post.content} />
        </article>
      </div>
      {relatedPosts.length > 0 && (
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center pt-8 sm:pt-12 lg:pt-16">
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
              Related Post
            </h2>
          </div>
          <div className="mt-8 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {relatedPosts.map((relatedPost) => (
              <article
                key={relatedPost.slug}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  {relatedPost.metadata.image ? (
                    <Image
                      src={relatedPost.metadata.image}
                      alt={relatedPost.metadata.title}
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
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <span className="text-gray-500 dark:text-gray-400">
                    {formatDate(relatedPost.metadata.publishedAt)}
                  </span>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 dark:text-white group-hover:text-gray-600 dark:group-hover:text-gray-300">
                    <Link href={`/blog/${relatedPost.slug}`}>
                      <span className="absolute inset-0" />
                      {relatedPost.metadata.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 dark:text-gray-300">
                    {relatedPost.metadata.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
