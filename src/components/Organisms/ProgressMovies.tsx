import TextProgressMovies from "@/components/Molecules/TextProgressMovies";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const ProgressMovies = () => {
  const randomGoalMovies = getRandomInt(0, 200);
  const randomProducedMovies = getRandomInt(0, randomGoalMovies);
  const porcentage = (randomProducedMovies / randomGoalMovies) * 100;

  return (
    <div className="w-full h-[1.875rem] bg-[#1E2328] shadow-progressMovies -skew-x-12 p-1 relative">
      <TextProgressMovies isProductionGoal />
      <div className="bg-white w-full h-full border border-black relative">
        <div className="bg-linesProgressMovies w-full h-full z-10 absolute"></div>
        <div
          className="bg-blue-progress bg-gradientProgressMovies bg-blend-screen bg-no-repeat w-full h-full"
          style={{ width: `${porcentage}%` }}
        >
          <div className="w-full h-full relative">
            <TextProgressMovies isProductionGoal={false} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressMovies;

