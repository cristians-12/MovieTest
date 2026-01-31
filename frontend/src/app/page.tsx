import MainContainer from "@/components/main-container";
import { headers } from "next/headers";

export default async function Home() {
  const headersList = headers();
  const host = headersList.get("host");

  const res = await fetch(`http://${host}/api/movie`, {
    cache: "force-cache",
  });

  const data = await res.json();

  return <MainContainer data={data} />;
}
