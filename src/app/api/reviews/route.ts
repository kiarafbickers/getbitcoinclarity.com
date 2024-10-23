import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const isbn = searchParams.get("isbn") || "1733871209";
  const page = searchParams.get("page") || "1";
  const hideLastPage = searchParams.get("hide_last_page") || "true";

  try {
    const goodreadsUrl = `https://www.goodreads.com/api/reviews_widget_iframe?hide_last_page=${hideLastPage}&isbn=${isbn}&page=${page}`;

    const response = await fetch(goodreadsUrl);

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.status}`);
    }

    const data = await response.text();

    return new NextResponse(data, {
      headers: {
        "Content-Type": "text/html",
      },
    });
  } catch (error) {
    console.error("Error fetching data from Goodreads:", error);
    return new NextResponse("Failed to fetch data", { status: 500 });
  }
}
