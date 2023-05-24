type betweenZeroToTen = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;

const ProgressMovies = ({ countMovies }: { countMovies: betweenZeroToTen }) => {
  return (
    <div className="w-full h-[1.875rem] bg-[#1E2328] shadow-progressMovies -skew-x-12 p-1">
      <div className="bg-white w-full h-full border border-black relative">
        <div className="bg-linesProgressMovies w-full h-full z-10 absolute" />
        <div
          className="bg-blue-progress bg-gradientProgressMovies bg-blend-screen bg-no-repeat w-full h-full"
          style={{ width: `${10 * countMovies}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressMovies;

