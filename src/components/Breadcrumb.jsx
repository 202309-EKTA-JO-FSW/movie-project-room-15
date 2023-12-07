import { ChevronRightIcon, HomeIcon } from "@heroicons/react/20/solid"
import Link from "next/link"

export default function Breadcrumb({ title, currentPage }) {
  return (
    <nav
      className="flex  my-8 max-w-7xl px-2 sm:px-4 lg:px-8 pt-5"
      aria-label="Breadcrumb "
    >
      <ol role="list" className="flex space-x-4">
        <li>
          <div>
            <Link href={"/"} className="text-gray-400 hover:text-gray-500">
              <HomeIcon className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
              <span className="sr-only">Home</span>
            </Link>
          </div>
        </li>

        <li>
          <div className="flex items-center">
            {" "}
            <ChevronRightIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <p className="mx-4   text-sm font-medium text-gray-500 hover:text-gray-700">
              {currentPage}
            </p>
            <ChevronRightIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
            <p className="mx-4 capitalize text-sm font-medium text-gray-500 hover:text-gray-700">
              {title}
            </p>
            <ChevronRightIcon
              className="h-5 w-5 flex-shrink-0 text-gray-400"
              aria-hidden="true"
            />
          </div>
        </li>
      </ol>
    </nav>
  )
}
