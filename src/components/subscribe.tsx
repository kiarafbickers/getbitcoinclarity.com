"use client";

import { useState } from "react";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setMessageType("");

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing!");
        setMessageType("success");
        setEmail("");
      } else {
        setMessage("Something went wrong. Please try again.");
        setMessageType("error");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="mt-16 flex flex-col items-center justify-center gap-4 sm:flex-row"
      >
        <div className="w-full">
          <label htmlFor="first-name" className="sr-only">
            First name
          </label>
          <input
            id="first-name"
            name="first-name"
            type="text"
            autoComplete="given-name"
            className="block w-full border-0 px-3.5 py-2.5 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-spring-wood-300 placeholder:text-spring-wood-400 dark:placeholder:text-spring-wood-500 focus:ring-inset focus:ring-spring-wood-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:ring-gray-700 dark:focus:ring-gray-500"
            placeholder="First name"
          />
        </div>
        <div className="w-full">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="block w-full border-0 px-3.5 py-2.5 text-gray-900 dark:text-gray-100 shadow-sm ring-1 ring-inset ring-spring-wood-300 placeholder:text-spring-wood-400 dark:placeholder:text-spring-wood-500 focus:ring-inset focus:ring-spring-wood-600 sm:text-sm sm:leading-6 dark:bg-gray-800 dark:ring-gray-700 dark:focus:ring-gray-500"
            placeholder="Email address"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="block w-full border-0 px-3.5 py-2.5 text-cream-can-950 dark:text-cream-can-100 shadow-sm ring-1 ring-inset ring-cream-can-400 bg-cream-can-300 dark:bg-cream-can-600 text-sm font-semibold hover:bg-cream-can-200 dark:hover:bg-cream-can-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cream-can-300 sm:leading-6"
        >
          {loading ? "Submitting..." : "Sign me up!"}
        </button>
      </form>

      {message && (
        <p
          className={`mt-4 text-sm ${
            messageType === "success"
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
}
