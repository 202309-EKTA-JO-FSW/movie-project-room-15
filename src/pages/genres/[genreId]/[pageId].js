import Grid from '@/components/Grid'
import Pagination from '@/components/Pagination'
import Breadcrumb from '@/components/Breadcrumb'
import { options, baseUrl, genres } from '@/constants'
import { useRouter } from 'next/router'
import React from 'react'
import Head from 'next/head'

function MovieGenre() {
  const router = useRouter()
  const genreId = router.query.genreId
  const pageId = router.query.pageId

  const [genreList, setGenreList] = React.useState([])

  React.useEffect(() => {
    async function fetchGenreId() {
      const res = await fetch(
        `${baseUrl}/discover/movie?&with_genres=${genreId}&${pageId}`,
        options
      )
      const data = await res.json()
      setGenreList(data)
    }

    fetchGenreId()
  }, [pageId, genreId])

  let genreName = ''

  if (genreId) {
    const { name } = genres.find((genre) => genre.id == genreId)
    genreName = name
  }

  return (
    <>
      <Head>
        <title>Movie Land | {genreName}</title>
      </Head>
      <div className='mx-auto max-w-7xl w-full '>
        <Breadcrumb title={genreName} currentPage='Genres' />
        <Grid data={genreList.results} />
        <Pagination
          currentPage={genreList.page}
          totalPages={genreList.total_pages}
          genreId={genreId}
        />
      </div>
    </>
  )
}

export default MovieGenre
