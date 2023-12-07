import React, { Fragment } from 'react'
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { movies, genres } from '@/constants'
import Search from './Search'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ setQuery, query }) {
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
  // const [genres, setGenres] = React.useState([])

  // React.useEffect(() => {
  //   fetch(`${baseUrl}/genre/movie/list?language=en`, options)
  //     .then((response) => response.json())
  //     .then((data) => setGenres(data.genres))
  //     .catch((err) => console.error(err))
  // }, [])

  return (
    <header className='bg-white border-b sticky top-0 z-10 shadow-sm '>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 '
        aria-label='Global'
      >
        <div className='flex '>
          <Link href='/' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Movie Land</span>
            <span className='text-3xl'>🍿</span>
          </Link>
        </div>
        <Search setQuery={setQuery} query={query} />
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>

        {/* Genres */}

        <Popover.Group className='hidden lg:flex lg:items-center lg:gap-x-12'>
          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
              Genres
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-[12rem] rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5  overflow-auto max-h-96'>
                <div className='p-4'>
                  {genres?.map((genre) => (
                    <div
                      key={genre.id}
                      className='group relative flex items-center rounded-lg p-2 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='flex-auto'>
                        <Popover.Button
                          as={Link}
                          href={`/genres/${genre.id}/page=1`}
                          className='block font-semibold text-gray-900'
                        >
                          {genre.name}
                          <span className='absolute inset-0' />
                        </Popover.Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          {/* Movies */}

          <Popover className='relative'>
            <Popover.Button className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'>
              Movies
              <ChevronDownIcon
                className='h-5 w-5 flex-none text-gray-400'
                aria-hidden='true'
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 translate-y-1'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 translate-y-1'
            >
              <Popover.Panel className='absolute -left-8 top-full z-10 mt-3 w-screen max-w-[12rem] overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5'>
                <div className='p-4'>
                  {movies.map((movie) => (
                    <div
                      key={movie.name}
                      className='group relative flex items-center rounded-lg p-2 text-sm leading-6 hover:bg-gray-50'
                    >
                      <div className='flex-auto'>
                        <Popover.Button
                          as={Link}
                          href={`/movies/${movie.href}`}
                          className='block font-semibold text-gray-900'
                        >
                          {movie.name}
                          <span className='absolute inset-0' />
                        </Popover.Button>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <Link href='/actors' className='text-sm font-semibold leading-6 text-gray-900'>
            Actors
          </Link>
        </Popover.Group>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10 ' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Movie Land</span>

              <span className='text-3xl'>🍿</span>
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>

          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Genres
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {genres.map((genre) => (
                          <Disclosure.Button
                            as={Link}
                            key={genre.id}
                            href={`/genres/${genre.id}/page=1`}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {genre.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>

                {/* Movies Mobile */}

                <Disclosure as='div' className='-mx-3'>
                  {({ open }) => (
                    <>
                      <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'>
                        Movies
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'rotate-180' : '',
                            'h-5 w-5 flex-none'
                          )}
                          aria-hidden='true'
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className='mt-2 space-y-2'>
                        {movies.map((movie) => (
                          <Disclosure.Button
                            as={Link}
                            href={`/movies/${movie.href}`}
                            key={movie.name}
                            className='block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {movie.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href='/actors'
                  className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Actors
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
