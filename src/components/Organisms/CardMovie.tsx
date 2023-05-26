import Image from "next/image";
import { Movie } from "@/interfaces/api-movies";
import formattedDate from "@/utils/formattedDate";

const CardMovie = ({ movie }: { movie: Movie }) => {
  const isPremiered = new Date(movie.release_date) < new Date(Date.now());
  const goodVotes = movie.vote_average > 5;
  return (
    <div key={movie.id} className="font-spiegel" data-cy="card-movie">
      <div className="border border-golden-3 rounded-lg relative overflow-hidden">
        <Image
          data-cy="card-movie-img"
          src={`https://image.tmdb.org/t/p/w500${
            movie.poster_path ?? movie.backdrop_path
          }`}
          alt={`${movie.title} poster`}
          width={200}
          height={294}
          className="w-full h-96 object-cover hover:scale-110 hover:brightness-125 transition-all rounded-lg"
        />
        {movie.vote_count > 0 && (
          <div
            className={`absolute top-3 right-3 w-8 h-8 flex justify-center items-center rounded-full border ${
              goodVotes
                ? "bg-green-200 border-green-500"
                : "bg-red-200 border-red-500"
            }`}
          >
            <p
              data-cy="card-movie-votes-average"
              className={`text-xs font-medium ${
                goodVotes ? "text-green-800" : "text-red-800"
              }`}
            >
              {movie.vote_average}
            </p>
          </div>
        )}
        <div
          className={`absolute bottom-4 left-4 py-1 px-2 rounded ${
            isPremiered ? "bg-blue-progress" : "bg-golden-3"
          }`}
        >
          <p className="text-white text-sm" data-cy="card-movie-is-premiered">
            {isPremiered ? "Estrenada" : "Por estrenar"}
          </p>
        </div>
      </div>

      <div className="my-4 w-full items-end flex flex-col">
        <h1
          className="text-golden-1 text-sm font-medium"
          data-cy="card-movie-name"
        >
          {movie.title}
        </h1>
        <p className="text-golden-1 text-xs" data-cy="card-movie-date">
          {formattedDate(new Date(movie.release_date))}
        </p>
      </div>
    </div>
  );
};

export default CardMovie;

