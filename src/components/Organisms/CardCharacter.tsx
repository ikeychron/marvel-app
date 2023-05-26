import Image from "next/image";
import MiniCardInfo from "@/components/Atoms/MiniCardInfo";
import { Character } from "@/interfaces/api-characters";

const CardCharacter = ({
  character,
  loading,
  onClick,
}: {
  character: Character;
  loading: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      data-cy="card-character"
      className="bg-cardCharacter hover:bg-cardCharacterHover border-cardInfoCharacter rounded w-full flex flex-col justify-between py-8 cursor-pointer group h-[28rem]"
      onClick={onClick}
    >
      <div className="flex items-center justify-between px-8">
        <Image
          src="/svgs/card-character-top.svg"
          alt="Decoration left for name"
          width={28}
          height={16}
        />
        <h6
          data-cy="card-character-name"
          className="text-golden-1 line-clamp-2 text-sm font-medium text-center uppercase tracking-wide"
        >
          {!loading ? character.name : "Cargando personaje"}
        </h6>
        <Image
          src="/svgs/card-character-top.svg"
          alt="Decoration right for name"
          width={28}
          height={16}
          className="-scale-x-100"
        />
      </div>

      <div className="flex justify-center relative">
        <Image
          data-cy="card-character-decoration-image"
          src="/svgs/circle-avatar.svg"
          alt="Decoration circle for character's avatar"
          width={300}
          height={300}
          className={`w-[9.688rem] absolute -top-[1.875rem] group-hover:rotate-45 transition-transform ${
            loading ? "animate-spin-slow" : ""
          }`}
        />
        <div className="h-[7.75rem] w-[7.75rem] bg-avatarCharacter rounded-full  overflow-hidden">
          {!loading && (
            <Image
              data-cy="card-character-image"
              width={125}
              height={125}
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={`${character.name} image`}
              className="h-[7.75rem] w-[7.75rem] rounded-full object-cover group-hover:brightness-125  group-hover:scale-110 transition-all"
            />
          )}
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-5">
        <MiniCardInfo
          data-cy="card-character-comics"
          title="Cómics"
          count={character.comics.available}
          loading={loading}
        />
        <MiniCardInfo
          data-cy="card-character-movies"
          title="Películas"
          count={character.series.available}
          loading={loading}
        />
      </div>
    </div>
  );
};

export default CardCharacter;

