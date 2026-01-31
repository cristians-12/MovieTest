// app/page.tsx
import MainContainer from "@/components/main-container";

export default async function Home({ 
  searchParams 
}: { 
  searchParams: { page?: string, query?: string } 
}) {
  const currentPage = searchParams.page || "1";
  const searchQuery = searchParams.query || "";

  const res = await fetch(`http://localhost:3000/api/movie?page=${currentPage}&query=${searchQuery}`, {
    next: { revalidate: 60 }, 
  });

  const data = await res.json();

  return <MainContainer data={data} />;
}