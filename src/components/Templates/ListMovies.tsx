import CardMovie from "@/components/Organisms/CardMovie";
import { IDataMovies } from "@/interfaces/api-movies";

const ListMovies = ({ data }: { data: IDataMovies }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
      {data.results.map((movie) => (
        <CardMovie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default ListMovies;

