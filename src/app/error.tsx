"use client";
import { useEffect } from "react";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="text-golden-1 font-spiegel">
      <h1 className="text-3xl">Oops, algo ha salido mal...</h1>
      <p className="text-sm bg-red-700 p-4 rounded mt-2">{error.message}</p>
      <button
        className="bg-golden-3 px-3 py-1 rounded mt-4 outline-none"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Intentar de nuevo
      </button>
    </div>
  );
};

export default Error;

