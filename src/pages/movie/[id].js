import { options, baseUrl } from "@/constants"
import { StarIcon } from "@heroicons/react/20/solid"
import Head from "next/head"
import Image from "next/image"

export async function getStaticPaths() {
  const pagesToFetch = 350
  let allPaths = []

  for (let page = 1; page <= pagesToFetch; page++) {
    const res = await fetch(
      `${baseUrl}/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
      options,
    )

    const data = await res.json()
    const paths = data.results.map((movie) => ({
      params: { id: movie.id.toString() },
    }))

    allPaths = allPaths.concat(paths)
  }

  return { paths: allPaths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${baseUrl}/movie/${params.id}`, options)
  const movie = await res.json()

  return { props: { movie } }
}

function Movie({ movie }) {
  console.log(movie)
  const rating = new Array(Math.round(movie.vote_average / 2))
  return (
    <>
      <Head>
        <title>Movie Land | {movie.title}</title>
      </Head>
      <div className="bg-white">
        <div aria-hidden="true" className="relative">
          <Image
            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
            alt=""
            height={250}
            width={1000}
            quality={80}
            priority={true}
            className="h-96 w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white" />
        </div>

        <div className="mx-auto relative -mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className=" ">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {movie.title}
            </h2>
            <p className="mt-4 text-gray-500">{movie.tagline}</p>
          </div>
        </div>
        <div className="flex justify-between mt-4 flex-col px-4 sm:px-6 lg:px-8 gap-8 md:flex-row-reverse max-w-7xl m-auto ">
          <div className="">
            <p className="text-3xl tracking-tight text-gray-900">Reviews</p>

            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {rating.fill("").map((_, i) => (
                    <StarIcon
                      key={i}
                      className="text-gray-900 h-5 w-5 flex-shrink-0"
                      aria-hidden="true"
                    />
                  ))}
                </div>

                <span className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {movie.vote_count} reviews
                </span>
              </div>
            </div>

            <div className="mt-10">
              <Image
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt=""
                height={400}
                width={250}
                className="object-cover object-center h-80 md:h-96 rounded-md"
              />
            </div>
          </div>

          <div className="hidden md:flex border border-gray-200"></div>

          <div className="md:w-2/3">
            <div>
              <h3 className="sr-only">Description</h3>
              <div className="space-y-6">
                <p className="text-base text-gray-900">{movie.overview}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Genres</h3>
              <div className="mt-4 flex flex-wrap">
                {movie.genres.map((genre) => (
                  <span
                    className="py-1 px-3 bg-zinc-700 mr-3  rounded-full text-white"
                    key={genre.id}
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  <li className="text-gray-400">
                    <p className="text-gray-600">
                      Language:{" "}
                      <span className="uppercase">
                        {movie.original_language}
                      </span>
                    </p>
                  </li>
                  <li className="text-gray-400">
                    <p className="text-gray-600">
                      Release date:{" "}
                      <span className="uppercase">{movie.release_date}</span>
                    </p>
                  </li>
                  <li className="text-gray-400">
                    <p className="text-gray-600">
                      Runtime <span className="uppercase">{movie.runtime}</span>{" "}
                      minutes
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Movie
