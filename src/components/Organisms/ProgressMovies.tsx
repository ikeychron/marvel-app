import TextProgressMovies from "@/components/Molecules/TextProgressMovies";
import getRandomInt from "@/utils/getRandomInt";

const ProgressMovies = () => {
  const randomGoalMovies = getRandomInt(0, 200);
  const randomProducedMovies = getRandomInt(0, randomGoalMovies);
  const porcentage = (randomProducedMovies / randomGoalMovies) * 100;

  return (
    <div className="w-full h-[1.875rem] bg-[#1E2328] shadow-progressMovies -skew-x-12 p-1 relative">
      <TextProgressMovies
        data-cy="progress-text-goals"
        isProductionGoal
        countMovie={randomGoalMovies}
      />
      <div className="bg-white w-full h-full border border-black relative">
        <div className="bg-linesProgressMovies w-full h-full z-10 absolute"></div>
        <div
          className="bg-blue-progress bg-gradientProgressMovies bg-blend-screen bg-no-repeat w-full h-full"
          style={{ width: `${porcentage}%` }}
        >
          <div className="w-full h-full relative">
            <TextProgressMovies
              data-cy="progress-text-produceds"
              isProductionGoal={false}
              countMovie={randomProducedMovies}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressMovies;

