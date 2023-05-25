"use client";
import { IDataMovies } from "@/interfaces/api-movies";
import formattedDate from "@/utils/formattedDate";
import Image from "next/image";

const ListMovies = ({ data }: { data: IDataMovies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
      {data.results.map((movie) => {
        const isPremiered = new Date(movie.release_date) < new Date(Date.now());
        return (
          <div key={movie.id}>
            <div className="border border-golden-3 rounded-lg">
              <Image
                src={`https://image.tmdb.org/t/p/w500${
                  movie.poster_path || movie.backdrop_path
                }`}
                alt={`${movie.title} poster`}
                width={200}
                height={294}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>

            <div className="my-4 font-spiegel w-full items-end flex flex-col">
              <h1 className="text-golden-1 text-sm font-medium">
                {movie.title}
              </h1>
              <p className="text-golden-1 text-xs">
                {formattedDate(new Date(movie.release_date))}
              </p>

              <div
                className={`py-1 px-2 mt-1 rounded ${
                  isPremiered ? "bg-blue-progress" : "bg-golden-3"
                }`}
              >
                <p className="text-white text-sm">
                  {isPremiered ? "Estrenada" : "Por estrenar"}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ListMovies;

