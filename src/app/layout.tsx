import "../styles/globals.css";
import Navbar from "@/components/Organisms/Navbar";
import Container from "@/components/Atoms/Container";
import { CharactersProvider } from "@/contexts/CharactersContext";

export const metadata = {
  title: "Personajes y películas de Marvel - API de Marvel y TMDB",
  description:
    "Descubre los personajes y películas del universo Marvel a través de nuestra aplicación web. Consultamos las API de Marvel y TMDB para ofrecerte información detallada sobre tus favoritos.",
  robot: "index, follow",
  keywords:
    "personajes de Marvel, películas de Marvel, API de Marvel, API de TMDB, Universo Marvel, Superhéroes de Marvel, Villanos de Marvel, Cómics de Marvel, Series de Marvel, Películas de superhéroes, Personajes famosos de cómic, Acción y aventura, Ciencia ficción y fantasía, Universos cinematográficos, Fanáticos de Marvel, Fans de los superhéroes, Entretenimiento, Características especiales de personajes, Historia de los personajes de Marvel, Detalles de personajes, Novedades de Marvel, Próximas películas de Marvel, Cine de superhéroes, Nuevo contenido de Marvel, Universo cinematográfico de Marvel, Héroes y villanos increíbles, Serie de televisión de Marvel, Películas de aventuras, Películas de ciencia ficción, Cine de fantasía, Cine de acción, Cine de aventuras, Personajes de Marvel más populares, Héroes y villanos más poderosos de Marvel, Películas de Marvel más taquilleras, Personajes más icónicos de Marvel, Personajes más queridos de Marvel, Detalles de la trama de Marvel, Producciones de Marvel, Historietas de superhéroes,Universo de superhéroes, Acción en vivo, Adaptaciones de cómics, Estrenos de Marvel, Noticias de Marvel, Curiosidades de personajes de Marvel, Secretos de personajes de Marvel, Películas de superhéroes más populares, Cómics clásicos de Marvel, Historia del universo Marvel, Personajes de Marvel menos conocidos, Personajes de Marvel más poderosos, Películas de Marvel más emocionantes, Series de Marvel más destacadas, Personajes de Marvel más interesantes, Personajes de Marvel más complejos, Películas de superhéroes más emocionantes, Películas de superhéroes más innovadoras, Personajes de Marvel más emblemáticos, Películas de Marvel más emocionales, Historial de personajes de Marvel, Películas y series de Marvel en orden cronológico.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <main className="min-h-screen pb-8 bg-background bg-blend-multiply">
          <Navbar />
          <CharactersProvider>
            <Container className="mt-[2.375rem]">{children}</Container>
          </CharactersProvider>
        </main>
      </body>
    </html>
  );
}

