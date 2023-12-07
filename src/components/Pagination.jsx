import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function Pagination({ currentPage, totalPages, genreId }) {
  return (
    <div className='flex mx-auto mt-12 max-w-7xl items-center justify-between border-t pt-12 border-gray-200 bg-white px-4 py-3 sm:px-6'>
      <div className='flex flex-1  justify-between sm:hidden'>
        {currentPage > 1 && (
          <Link
            href={`/genres/${genreId}/page=${currentPage - 1}`}
            className='relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
          >
            Previous
          </Link>
        )}
        {currentPage < 500 && (
          <Link
            href={`/genres/${genreId}/page=${currentPage + 1}`}
            className='relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50'
          >
            Next
          </Link>
        )}
      </div>
      <div className='hidden sm:flex sm:flex-1 sm:items-center sm:justify-between'>
        <div>
          <p className='text-sm text-gray-700'>
            Page <span className='font-medium'>{currentPage}</span> of{' '}
            <span className='font-medium'>{totalPages}</span> Pages
          </p>
        </div>
        <div>
          <nav
            className='isolate inline-flex -space-x-px rounded-md shadow-sm'
            aria-label='Pagination'
          >
            {currentPage > 1 && (
              <Link
                href={`/genres/${genreId}/page=${currentPage - 1}`}
                className='relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
              >
                <span className='sr-only'>Previous</span>
                <ChevronLeftIcon className='h-5 w-5' aria-hidden='true' />
              </Link>
            )}

            <span className='relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'>
              {currentPage}
            </span>
            {currentPage < 500 && (
              <Link
                href={`/genres/${genreId}/page=${currentPage + 1}`}
                className='relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
              >
                <span className='sr-only'>Next</span>
                <ChevronRightIcon className='h-5 w-5' aria-hidden='true' />
              </Link>
            )}
          </nav>
        </div>
      </div>
    </div>
  )
}
