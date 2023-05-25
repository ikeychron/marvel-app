import Image from "next/image";

interface IPagination {
  totalPages: number | string;
  currentPage: number | string;
  loading: boolean;
  onNext: () => void;
  onPrevious: () => void;
}

const Arrow = ({
  isNext = false,
  onClick,
  disabled,
}: {
  isNext?: boolean;
  onClick: () => void;
  disabled: boolean;
}) => {
  return (
    <button
      className="bg-golden-3 rounded-full flex justify-center items-center w-[2.125rem] h-[2.125rem] disabled:bg-gray-500"
      onClick={onClick}
      disabled={disabled}
    >
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

const Pagination: React.FC<IPagination> = ({
  totalPages,
  currentPage,
  loading,
  onNext,
  onPrevious,
}) => {
  return (
    <div className="w-full flex justify-center mt-7">
      <div className="flex items-center">
        <Arrow onClick={onPrevious} disabled={loading || currentPage === 1} />
        <p className="mx-5 text-golden-3 text-xl font-medium font-spiegel">
          {currentPage} / {totalPages}
        </p>
        <Arrow
          isNext
          onClick={onNext}
          disabled={loading || currentPage === totalPages}
        />
      </div>
    </div>
  );
};

export default Pagination;

