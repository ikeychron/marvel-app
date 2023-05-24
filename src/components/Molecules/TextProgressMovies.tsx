interface ITextProgressMovies {
  isProductionGoal: boolean;
}

const TextProgressMovies: React.FC<ITextProgressMovies> = ({
  isProductionGoal,
}) => {
  return (
    <div
      className={`absolute skew-x-12 ${
        isProductionGoal ? "-top-7 right-1.5" : "-bottom-9 -right-1"
      }`}
    >
      <div
        className={`relative font-spiegel text-[0.625rem] leading-none ${
          isProductionGoal ? "text-golden-3" : "text-blue-progress"
        }`}
      >
        <div
          className={`w-0 border-r border-dotted absolute h-2 -right-0.5 ${
            isProductionGoal
              ? "-bottom-2 border-golden-3"
              : "-top-2 border-blue-progress"
          }`}
        />
        <p>XX Películas</p>
        <p>{isProductionGoal ? "Meta de Producción" : "Producidas"}</p>
      </div>
    </div>
  );
};

export default TextProgressMovies;

