import styles from "./page.module.css";
import Movie from "./MovieItem.tsx";

export const metadata = {
  title: "home page",
  description: "home , nextjs13.2, .... ",
};

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`
  );

  const result = await data.json();
  return (
    <main className={styles.main}>
      <h1> Hello Next js 13.2 🔥 </h1>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {result.results.map((movie) => (
              <Movie movie={movie} key={movie.id} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
