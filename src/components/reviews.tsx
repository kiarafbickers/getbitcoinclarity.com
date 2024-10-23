"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Reviews() {
  const [reviewsHTML, setReviewsHTML] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          `/api/reviews?hide_last_page=true&isbn=1733871209&page=${currentPage}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch reviews");
        }

        const data = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        const pagination = doc.querySelector(".gr_pagination");

        if (pagination) {
          pagination.remove();
        }

        setReviewsHTML(doc.body.innerHTML);
        const totalLinks = pagination?.querySelectorAll("a");
        setTotalPages(totalLinks ? totalLinks.length : 0);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [currentPage]);

  const getPaginationNumbers = () => {
    const numbers: number[] = [];
    const maxVisiblePages = 3;
    let startPage = Math.max(1, currentPage - 1);
    let endPage = Math.min(totalPages, currentPage + 1);

    if (totalPages <= maxVisiblePages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage === 1) {
        endPage = Math.min(maxVisiblePages, totalPages);
      } else if (currentPage === totalPages) {
        startPage = Math.max(1, totalPages - maxVisiblePages + 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      numbers.push(i);
    }

    return numbers;
  };

  return (
    <div className="mx-auto max-w-4xl px-6 lg:px-8">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-6">
        Praise for Bitcoin Clarity
      </h3>
      <div className="relative h-full">
        {loading ? (
          <div className="space-y-4">
            <div className="animate-pulse">
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div>
            </div>
          </div>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: reviewsHTML }} />
        )}
      </div>
      <div className="mt-4 flex items-center justify-center">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`mr-2 ${
            currentPage === 1
              ? "opacity-50 cursor-not-allowed"
              : "text-spring-wood-600 hover:text-spring-wood-700 dark:text-spring-wood-300 dark:hover:text-spring-wood-400"
          }`}
        >
          « Previous
        </button>

        {getPaginationNumbers().map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => setCurrentPage(pageNumber)}
            className={`mx-1 p-1 ${
              currentPage === pageNumber
                ? "text-spring-wood-700 dark:text-spring-wood-400"
                : "text-spring-wood-600 hover:text-spring-wood-700 dark:text-spring-wood-300 dark:hover:text-spring-wood-400"
            }`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className={`ml-2 ${
            currentPage === totalPages
              ? "opacity-50 cursor-not-allowed"
              : "text-spring-wood-600 hover:text-spring-wood-700 dark:text-spring-wood-300 dark:hover:text-spring-wood-400"
          }`}
        >
          Next »
        </button>
      </div>

      <Link
        href="https://www.goodreads.com/book/show/55428046-bitcoin-clarity?utm_medium=api&utm_source=reviews_widget"
        target="_blank"
        className="mt-8 text-sm text-gray-600 dark:text-gray-300 flex items-center justify-end"
      >
        Reviews from Goodreads.com
      </Link>
    </div>
  );
}
