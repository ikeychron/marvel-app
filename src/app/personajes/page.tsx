import Container from "@/components/Atoms/Container";
import Navbar from "@/components/Organisms/Navbar";
import CardInfoCharacter from "@/components/Atoms/CardInfoCharacter";
import ProgressMovies from "@/components/Molecules/ProgressMovies";

export default function CharactersPage() {
  const countMovies = 8;

  return (
    <main className="min-h-screen bg-background bg-blend-multiply">
      <Navbar />

      <Container className="mt-[2.375rem]">
        <div className="grid grid-cols-characterMoviesVideoImage gap-[1.375rem] h-48">
          <CardInfoCharacter className="text-white px-6">
            <h1 className="text-golden-1 font-medium text-xl">
              PROGRESO DE PELICULAS PRODUCIDAS
            </h1>

            <div className="relative">
              <div className="w-0 border-r border-dotted absolute right-0 h-[0.313rem] border-blue-progress" />
              <p>XX Películas Meta</p>
              <p>de Producción</p>
            </div>

            <ProgressMovies countMovies={countMovies} />

            <div className="relative">
              <div className="w-0 border-r border-dotted absolute right-0 h-[0.313rem] border-blue-progress" />
              <p>XX Películas Meta</p>
              <p>Producidas</p>
            </div>
          </CardInfoCharacter>
          <CardInfoCharacter>
            <h1 className="text-golden-1 font-medium text-xl">
              AQUÍ VA UN VIDEO
            </h1>
          </CardInfoCharacter>
          <CardInfoCharacter>
            <h1 className="text-golden-1 font-medium text-xl">
              AQUÍ VA UNA IMÁGEN
            </h1>
          </CardInfoCharacter>
        </div>
      </Container>
    </main>
  );
}

