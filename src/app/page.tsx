import ListMovies from "@/components/Templates/ListMovies";
import { getMovies } from "@/data/interfaceAPI";

async function getData() {
  try {
    const data = await getMovies();
    return data;
  } catch (error: any) {
    throw Error(error?.status || "Failed to fetch data");
  }
}

export default async function HomePage() {
  const data = await getData();

  return (
    <>
      <h1 className="text-golden-1 text-3xl mb-6 font-spiegel">
        Últimas producciones de Marvel
      </h1>
      <ListMovies data={data} />
    </>
  );
}

