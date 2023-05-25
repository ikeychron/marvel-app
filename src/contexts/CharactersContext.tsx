"use client";
import { createContext, useState, ReactNode } from "react";
import { Character, Data } from "@/interfaces/api-characters";
import { getCharacters } from "@/data/interfaceAPI";

interface ICharactersContext {
  characters: Character[];
  currentPage: number;
  totalPages: number;
  loading: boolean;
  handlePrevious: () => void;
  handleNext: () => void;
  setInitialData: (data: Data) => void;
}

export const CharactersContext = createContext<ICharactersContext>(
  {} as ICharactersContext
);

export const CharactersProvider = ({ children }: { children: ReactNode }) => {
  const [limit, setLimit] = useState(0);
  const [totalCharacters, setTotalCharacters] = useState(0);
  const [characters, setCharacters] = useState<Character[]>([]);
  const [allCharacters, setAllCharacters] = useState<Character[][]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  async function fetchDataPagination(isPrevious = false) {
    setLoading(true);

    if (isPrevious) {
      setCharacters(allCharacters[currentPage - 2]);
      setCurrentPage((prev) => prev - 1);
      setLoading(false);
    } else {
      if (allCharacters[currentPage]) {
        setCharacters(allCharacters[currentPage]);
        setCurrentPage((prev) => prev + 1);
        setLoading(false);
      } else {
        try {
          const offset = currentPage * limit;
          const data = await getCharacters(offset);

          setCharacters(data.results);
          setAllCharacters((prev) => [...prev, data.results]);
          setCurrentPage((prev) => prev + 1);
          setLoading(false);
        } catch (error: any) {
          setLoading(false);
          if (error?.name === "AbortError") {
            console.log("La solicitud fue cancelada.");
          } else {
            console.error(error);
          }
        }
      }
    }
  }

  const handlePrevious = () => {
    fetchDataPagination(true);
  };
  const handleNext = () => {
    fetchDataPagination();
  };

  const setInitialData = (data: Data) => {
    if (allCharacters.length < 1) {
      setCharacters(data.results);
      setAllCharacters((prev) => [...prev, data.results]);
      setTotalCharacters(data.count);
      setTotalPages(Math.ceil(data.total / data.limit));
      setLimit(data.limit);
      setCurrentPage(1);
    }
  };

  return (
    <CharactersContext.Provider
      value={{
        // Values
        characters,
        currentPage,
        totalPages,
        loading,

        // Methods
        handlePrevious,
        handleNext,
        setInitialData,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};

