import Image from "next/image";

const Arrow = ({ isNext = false }: { isNext?: boolean }) => {
  return (
    <button className="bg-golden-3 rounded-full flex justify-center items-center w-[2.125rem] h-[2.125rem]">
      <Image
        width={9}
        height={14}
        src="/svgs/arrow.svg"
        alt={`${isNext ? "Next" : "Previous"} arrow button`}
        className={`${isNext ? "-scale-x-100" : ""}`}
      />
    </button>
  );
};

const Pagination = () => {
  return (
    <div className="w-full flex justify-center mt-7">
      <div className="flex items-center">
        <Arrow />
        <p className="mx-5 text-golden-3 text-xl font-medium font-spiegel">
          1 / 5
        </p>
        <Arrow isNext />
      </div>
    </div>
  );
};

export default Pagination;

