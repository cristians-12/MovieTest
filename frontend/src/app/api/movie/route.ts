import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  // 1. Capturamos todos los parámetros posibles
  const page = searchParams.get("page") ?? "1";
  const language = searchParams.get("language") ?? "es-CO";
  const genre = searchParams.get("genre");
  const query = searchParams.get("query");


  let url = `https://api.themoviedb.org/3/discover/movie?page=${page}&language=${language}`;

  if (query) {
    url = `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&page=${page}&language=${language}`;
  } else if (genre) {
    url += `&with_genres=${genre}`;
  } else {
    url = `https://api.themoviedb.org/3/movie/popular?page=${page}&language=${language}`;
  }

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${process.env.API_AUTH_KEY}`,
        accept: "application/json",
      },
      next: { revalidate: 60 * 60 }
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Error fetching data" }, { status: res.status });
    }

    const data = await res.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}