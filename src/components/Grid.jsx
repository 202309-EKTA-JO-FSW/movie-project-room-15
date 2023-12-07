import Image from 'next/image'
import Link from 'next/link'

export default function Grid({ data }) {
  return (
    <ul
      role='list'
      className='mx-auto max-w-7xl   px-2 sm:px-4 lg:px-8 grid gap-x-8 gap-y-12 grid-cols-2 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-5 xl:gap-x-8'
    >
      {data?.map((movie) => (
        <Link href={`/movie/${movie.id}`} key={movie.id}>
          <li className='relative'>
            <div className='group aspect-h-7 aspect-w-10 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 '>
              <Image
                width={280}
                height={400}
                quality={50}
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                className='pointer-events-none  object-cover group-hover:opacity-75 group-hover:scale-110 transition-all'
                alt={movie.title}
                placeholder='empty'
                priority={true}
              ></Image>

              <button type='button' className='absolute inset-0 focus:outline-none'>
                <span className='sr-only'>View details for {movie.title}</span>
              </button>
            </div>
            <p className=' pointer-events-none mt-2 block truncate text-xl  font-medium text-gray-900'>
              {movie.title}
            </p>

            <div className='flex justify-between items-center'>
              <p>Rate</p>
              <p className='pointer-events-none block text-sm font-medium text-gray-500'>
                {movie.vote_average}
              </p>
            </div>
          </li>
        </Link>
      ))}
    </ul>
  )
}
