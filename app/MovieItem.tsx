import Link from "next/link";

export default function MovieItem({
  movie: { poster_path, release_date, popularity, title, original_title },
}) {
  const imageURL = "https://image.tmdb.org/t/p/w500";

  return (
    <>
      <div className="group relative">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
          <img
            src={`${imageURL}${poster_path}`}
            alt={`${original_title}`}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-sm text-gray-700">
              <Link href={"/about"}>
                <span aria-hidden="true" className="absolute inset-0"></span>
                {title}
              </Link>
            </h3>
            <p className="mt-1 text-sm text-gray-500">{release_date}</p>
          </div>
          <p className="text-sm font-medium text-gray-900">{popularity}</p>
        </div>
      </div>
    </>
  );
}
