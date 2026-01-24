import MainContainer from "@/components/main-container";
import { headers } from "next/headers";

export default async function Home() {
  const headersList = headers();
  const host = headersList.get("host");

  const res = await fetch(`http://${host}/api/movie`, {
    cache: "no-store",
  });

  const data = await res.json();

  console.log(data);

  return <MainContainer data={data} />;
}
