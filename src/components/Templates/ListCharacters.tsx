"use client";
import CardCharacter from "@/components/Organisms/CardCharacter";
import Pagination from "@/components/Molecules/Pagination";
import { CharactersContext } from "@/contexts/CharactersContext";
import { Data } from "@/interfaces/api";
import { useContext, useEffect } from "react";

const ListCharacters = ({ data }: { data: Data }) => {
  const {
    characters,
    currentPage,
    totalPages,
    loading,
    handleNext,
    handlePrevious,
    setInitialData,
  } = useContext(CharactersContext);

  useEffect(() => {
    setInitialData(data);
  }, [data]);

  return (
    <>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {characters.map((character) => (
          <CardCharacter
            character={character}
            key={character.id}
            loading={loading}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        loading={loading}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </>
  );
};

export default ListCharacters;

