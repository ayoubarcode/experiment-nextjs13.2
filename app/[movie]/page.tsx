import Image from "next/image";
import React from "react";

async function getSingleMovie(id: string): Promise {
  const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_API_KEY}&language=en-US`;
  const response = await fetch(url);
  return response.json();
}

export async function generateMetadata({ params }) {
  const { movie: movieId } = params;
  const data = await getSingleMovie(movieId);

  return {
    title: data.title,
  };
}

export default async function MovieDetail({ params }) {
  const { movie: movieId } = params;
  const result = await getSingleMovie(movieId);

  return (
    <div className="flex justify-center mt-4">
      <p className="font-sans text-2xl  block">{result.title}</p>
      <p className="block">release date : {result.release_date}</p>
    </div>
  );
}
