import Image from "next/image";
import CardInfoCharacter from "@/components/Atoms/CardInfoCharacter";
import ProgressMovies from "@/components/Organisms/ProgressMovies";
import { getCharactersServer } from "@/data/interfaceAPI";
import ListCharacters from "@/components/Templates/ListCharacters";

async function getData() {
  try {
    const data = await getCharactersServer();
    return data;
  } catch (error: any) {
    throw Error(error?.status || "Failed to fetch data");
  }
}

export default async function CharactersPage() {
  const data = await getData();

  return (
    <>
      {/* Characters Card Top */}
      <div className="grid grid-cols-1 lg:grid-cols-characterMoviesVideoImage gap-[1.375rem]">
        <CardInfoCharacter className="text-white px-6 pb-12 pt-6 justify-between flex-col">
          <h1 className="text-golden-1 font-medium text-xl">
            PROGRESO DE PELICULAS PRODUCIDAS
          </h1>

          <ProgressMovies />
        </CardInfoCharacter>
        <CardInfoCharacter>
          <iframe
            className="w-full h-full rounded"
            src="https://www.youtube.com/embed/NaWIBRvSWE8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </CardInfoCharacter>
        <CardInfoCharacter className="relative">
          <Image
            className="rounded brightness-200 object-cover"
            src="https://pbs.twimg.com/media/FtrZy57XsAIDofO?format=jpg&name=4096x4096"
            alt="Tobey, Andrew and Tom as Spidermans image"
            fill
          />
        </CardInfoCharacter>
      </div>

      <ListCharacters data={data} />
    </>
  );
}

