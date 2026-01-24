// app/api/movies/route.ts
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const page = searchParams.get("page") ?? "1";

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?page=${page}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.API_AUTH_KEY}`,
        accept: "application/json",
      },
    }
  );

  return NextResponse.json(await res.json());
}
