import { Character } from "@/interfaces/api-characters";
import Image from "next/image";

const PrintData = ({
  title,
  quantity,
}: {
  title: string;
  quantity: number;
}) => (
  <p className="text-sm text-golden-1 font-spiegel mr-3">
    <span className="font-medium">{title}:</span> {quantity}
  </p>
);

const ModalCharacter = ({
  open,
  handleClose,
  character,
}: {
  open: boolean;
  handleClose: () => void;
  character: Character;
}) => (
  <>
    {open && (
      <div className="fixed bg-black bg-opacity-50 z-20 inset-0 w-full h-full flex items-center justify-center">
        <div className="w-full h-full absolute z-20" onClick={handleClose} />
        <div className="z-30 max-w-sm bg-cardCharacter rounded-lg shadow-slate-900 shadow">
          <div className="rounded-t-lg overflow-hidden relative">
            <Image
              width={300}
              height={300}
              src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
              alt={`${character.name} image`}
              className="w-full h-72 object-cover hover:scale-110 hover:brightness-125 transition-all rounded-t-lg"
            />
            <button
              onClick={handleClose}
              className="absolute p-1 font-medium text-white bg-[#111111] border border-golden-3 rounded-full top-2 right-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="white"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-golden-1">
              {character.name}
            </h5>

            <p className="mb-3 text-golden-1 font-spiegel text-sm">
              {character.description || "No tiene descripción"}
            </p>

            <div className="flex flex-wrap mb-3">
              <PrintData title="Cómics" quantity={character.comics.available} />
              <PrintData title="Series" quantity={character.series.available} />
              <PrintData
                title="Historias"
                quantity={character.stories.available}
              />
              <PrintData
                title="Eventos"
                quantity={character.events.available}
              />
            </div>
          </div>
        </div>
      </div>
    )}
  </>
);

export default ModalCharacter;

