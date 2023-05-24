import Image from "next/image";
import MiniCardInfo from "../Atoms/MiniCardInfo";

const CardCharacter = () => {
  return (
    <div className="bg-cardCharacter hover:bg-cardCharacterHover border-cardInfoCharacter rounded w-full flex flex-col py-8 cursor-pointer group">
      <div className="flex items-center justify-between px-8">
        <Image
          src="/svgs/card-character-top.svg"
          alt="Decoration left for name"
          width={28}
          height={16}
        />
        <h6 className="text-golden-1 text-sm font-medium text-center uppercase tracking-wide w-20">
          PERSONAJE NAME
        </h6>
        <Image
          src="/svgs/card-character-top.svg"
          alt="Decoration right for name"
          width={28}
          height={16}
          className="-scale-x-100"
        />
      </div>

      <div className="mt-3 flex justify-center relative">
        <Image
          src="/svgs/circle-avatar.svg"
          alt="Decoration circle for character's avatar"
          width={300}
          height={300}
          className="w-[9.688rem] -scale-x-100 absolute top-[0.813rem] group-hover:rotate-45 transition-transform"
        />
        <div className="mt-11 h-[7.75rem] w-[7.75rem] bg-avatarCharacter rounded-full  overflow-hidden">
          <Image
            width={720}
            height={720}
            src="https://pbs.twimg.com/media/FtrZy57XsAIDofO?format=jpg&name=4096x4096"
            alt="Character's avatar"
            className="h-[7.75rem] w-[7.75rem] rounded-full object-cover brightness-200 group-hover:scale-125 transition-transform"
          />
        </div>
      </div>
      <div className="mt-14 w-full flex flex-col items-center gap-5">
        <MiniCardInfo title="Cómics" count="25" />
        <MiniCardInfo title="Películas" count="12" />
      </div>
    </div>
  );
};

export default CardCharacter;

