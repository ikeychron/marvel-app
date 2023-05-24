import Image from "next/image";
import CardInfoCharacter from "@/components/Atoms/CardInfoCharacter";
import ProgressMovies from "@/components/Organisms/ProgressMovies";
import CardCharacter from "@/components/Organisms/CardCharacter";
import Pagination from "@/components/Molecules/Pagination";

export default function CharactersPage() {
  const countMovies = 8;

  return (
    <>
      {/* Characters Card Top */}
      <div className="grid grid-cols-1 lg:grid-cols-characterMoviesVideoImage gap-[1.375rem]">
        <CardInfoCharacter className="text-white px-6 pb-12 pt-6 justify-between flex-col">
          <h1 className="text-golden-1 font-medium text-xl">
            PROGRESO DE PELICULAS PRODUCIDAS
          </h1>

          <ProgressMovies countMovies={countMovies} />
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

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
        <CardCharacter />
      </div>

      <Pagination />
    </>
  );
}

