# Marvel App 🚀

This app is a test project made for the purpose of displaying Marvel characters and movies. It features a home page where users can look at their favorite movies, a character page with detailed information about the marvel's characters, and a modal with information about the selected character when you do click in a character. It is built with Next.js, Tailwind CSS, Context, Atomic Design, and it fetches data from the Marvel API and The Movie DB API. The app also includes end-to-end tests using Cypress.

## Getting Started

To run the app, follow these simple steps:

1. Clone the repository to your local machine.
2. Install dependencies by running `npm install` in your terminal.
3. Create a `.env` file and write your public Marvel API key as `NEXT_PUBLIC_MARVEL_PUBLIC_API_KEY=yourapikey` and your private Marvel API Key as `MARVEL_PRIVATE_API_KEY=yourapikey`, and your The Movie DB API key as `TMDMOVIE_API_KEY=yourapikey` for when you start the server.
4. Start the development server by running `npm run dev`.
5. The app will open in your browser at `http://localhost:3000`.

The app will fetch the data from the Marvel API and The Movie DB API and display the results. To view more details about a character, click on the corresponding card.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Context API](https://reactjs.org/docs/context.html)
- [Responsive Web Design](https://www.smashingmagazine.com/2011/01/guidelines-for-responsive-web-design/)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Cypress](https://www.cypress.io/)
- [Marvel API](https://developer.marvel.com/)
- [The Movie DB API](https://developers.themoviedb.org/3/getting-started/introduction)

## End-to-End Tests

The app includes end-to-end tests using Cypress to ensure that the user flow works correctly. To run the tests, use `npm run cy:run` or `npm run cy:open`. The tests should run simultaneously with the Next.js development server.

## Deployment

The app can be deployed to a hosting service such as Vercel or Netlify. To deploy the app, follow these steps:

1. Create a production build by running `npm run build`.
2. Install a server such as `serve` by running `npm install -g serve`.
3. Start the server by running `serve -s out`.
4. The app should be available at `http://localhost:5000` or the specified port number.

## Credits

This app was created by Carlos Barrios (Me) as a test project to showcasetheir skills and knowledge of Next.js, Tailwind CSS, Context, Atomic Design, and API integration with the Marvel API and The Movie DB API. The Marvel API and The Movie DB API were used for educational and non-commercial purposes only.

