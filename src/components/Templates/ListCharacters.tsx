"use client";
import { useContext, useEffect, useState } from "react";
import CardCharacter from "@/components/Organisms/CardCharacter";
import Pagination from "@/components/Molecules/Pagination";
import { CharactersContext } from "@/contexts/CharactersContext";
import { Character, Data } from "@/interfaces/api-characters";
import ModalCharacter from "../Organisms/ModalCharacter";

const ListCharacters = ({ data }: { data: Data }) => {
  const [characterSelected, setCharacterSelected] = useState<Character | null>(
    null
  );

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
      <ModalCharacter
        character={characterSelected as Character}
        open={characterSelected !== null}
        handleClose={() => setCharacterSelected(null)}
      />
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
        {characters.map((character) => (
          <CardCharacter
            character={character}
            key={character.id}
            loading={loading}
            onClick={() => setCharacterSelected(character)}
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

