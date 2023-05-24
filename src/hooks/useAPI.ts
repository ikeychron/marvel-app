import { useEffect, useState } from "react";
import { Character } from "@/interfaces/api";
import { getCharacters } from "@/data/interfaceAPI";

type ITypeFetch = "previous" | "next" | "initial";
const usePokemon = () => {
  const [pokemons, setPokemons] = useState<Character[]>([]);
  const [page, setPage] = useState(1);
  const [nextPage, setNextPage] = useState<null | string>(null);
  const [previousPage, setPreviousPage] = useState<null | string>(null);
  const [totalPokemons, setTotalPokemons] = useState(0);
  const [loading, setLoading] = useState(true);

  async function fetchData(type: ITypeFetch = "next") {
    setLoading(true);
    let fetchUrl: string | null = "https://pokeapi.co/api/v2/pokemon/?limit=10";

    if (type === "next") {
      fetchUrl = nextPage;
    }
    if (type === "previous") {
      fetchUrl = previousPage;
    }

    if (fetchUrl) {
      try {
        const { data, error } = await getCharacters(fetchUrl);

        if (error) {
          throw new Error(error);
        }

        if (data) {
          setNextPage(data.next);
          setPreviousPage(data.previous);
          setPokemons(data.pokemons);
          setTotalPokemons(data.count);
          setPage((prev) =>
            type === "initial" ? 1 : type === "previous" ? prev - 1 : prev + 1
          );
          setLoading(false);
        }
      } catch (error: any) {
        if (error?.name === "AbortError") {
          console.log("La solicitud fue cancelada.");
        } else {
          console.error(error);
        }
      }
    }
  }

  const handlePrevious = () => {
    fetchData("previous");
  };
  const handleNext = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData("initial");
  }, []);

  return {
    // Values
    pokemons,
    page,
    nextPage,
    previousPage,
    totalPokemons,
    loading,
    // Methods
    handlePrevious,
    handleNext,
  };
};

export default usePokemon;

