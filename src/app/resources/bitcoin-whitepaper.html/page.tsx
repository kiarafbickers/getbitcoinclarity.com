"use client";

import { useEffect } from "react";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Redirect: NextPage = () => {
  useEffect(() => {
    window.location.href = "https://bitcoin.org/bitcoin.pdf";
  }, []);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Redirecting to https://bitcoin.org/bitcoin.pdf</title>
        <meta
          httpEquiv="refresh"
          content="0; URL=https://bitcoin.org/bitcoin.pdf"
        />
        <link rel="nofollow" href="https://bitcoin.org/bitcoin.pdf" />
      </Head>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            Redirecting...
          </h1>
          <p className="text-gray-600 mb-2">You are being redirected to</p>
          <Link
            href="https://bitcoin.org/bitcoin.pdf"
            className="text-blue-600 underline hover:text-blue-800"
            rel="noopener noreferrer"
            target="_blank"
          >
            https://bitcoin.org/bitcoin.pdf
          </Link>
          <p className="mt-4 text-gray-500">
            If you are not redirected automatically, click the link above.
          </p>
        </div>
      </div>
    </>
  );
};

export default Redirect;
