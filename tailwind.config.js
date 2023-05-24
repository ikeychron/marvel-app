/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "golden-1": "#F0E6D2",
        "golden-3": "#C89B3C",
        "blue-progress": "#1DA5B4",
      },
      backgroundImage: {
        background:
          'url("/images/background.png"), radial-gradient(82.53% 82.53% at 50% 91.99%, #19488F 44.09%, #000000 100%)',
        gradientNavLink:
          "linear-gradient(0deg, #231F20 0%, rgba(34, 34, 34, 0) 100%)",
        linesProgressMovies:
          "repeating-linear-gradient(to right, transparent, transparent calc(10% - 1px), black calc(10% - 1px), black 10%)",
        gradientProgressMovies:
          "linear-gradient(180deg, #31969D 0%, #65E6F4 31.77%, #24AEBD 66.15%, #1299A8 98.96%), radial-gradient(49.94% 49.16% at 49.93% 40.76%, #FFFFFF 0%, #D2D2D2 10%, #9B9B9B 23%, #6B6B6B 37%, #444444 50%, #262626 63%, #111111 76%, #040404 88%, #000000 100%)",
      },
      gridTemplateColumns: {
        // 2.75rem is the total gap
        characterMoviesVideoImage: "calc(40% - 2.75rem) 30% 30%",
      },
      boxShadow: {
        progressMovies:
          "0px 0px 4px #FFA942, 0px 0px 4px rgba(255, 169, 66, 0.25), 0px 0px 7px rgba(255, 169, 66, 0.25)",
      },
      backgroundSize: {
        gradientProgressMovies: "100%, 100% 25%",
      },
    },
  },
  plugins: [],
};

