import Image from "next/image";
import MiniCardInfo from "../Atoms/MiniCardInfo";
import { Character } from "../../interfaces/api";

const CardCharacter = ({ character }: { character: Character }) => {
  return (
    <div className="bg-cardCharacter hover:bg-cardCharacterHover border-cardInfoCharacter rounded w-full flex flex-col justify-between py-8 cursor-pointer group h-[28rem]">
      <div className="flex items-center justify-between px-8">
        <Image
          src="/svgs/card-character-top.svg"
          alt="Decoration left for name"
          width={28}
          height={16}
        />
        <h6 className="text-golden-1 line-clamp-2 text-sm font-medium text-center uppercase tracking-wide">
          {character.name}
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
          src="/svgs/circle-avatar.svg"
          alt="Decoration circle for character's avatar"
          width={300}
          height={300}
          className="w-[9.688rem] -scale-x-100 absolute -top-[1.875rem] group-hover:rotate-45 transition-transform"
        />
        <div className="h-[7.75rem] w-[7.75rem] bg-avatarCharacter rounded-full  overflow-hidden">
          <Image
            width={720}
            height={720}
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            alt={`${character.name} image`}
            className="h-[7.75rem] w-[7.75rem] rounded-full object-cover brightness-200 group-hover:scale-125 transition-transform"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center gap-5">
        <MiniCardInfo title="Cómics" count={character.comics.available} />
        <MiniCardInfo title="Películas" count={character.series.available} />
      </div>
    </div>
  );
};

export default CardCharacter;

