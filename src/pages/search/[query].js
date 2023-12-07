import React from 'react'
import { options, baseUrl } from '@/constants'
import Grid from '@/components/Grid'
import SectionHeading from '@/components/SectionHeading'
import Head from 'next/head'

import { useRouter } from 'next/router'

function MovieResults() {
  const [searchResults, setSearchResults] = React.useState([])
  const router = useRouter()
  const query = router.query.query

  React.useEffect(() => {
    fetch(`${baseUrl}/search/movie?query=${query}`, options)
      .then((response) => response.json())
      .then((data) => setSearchResults(data.results))
  }, [query, setSearchResults])

  return (
    <>
      <Head>
        <title>Movie Land | {query}</title>
      </Head>
      <SectionHeading title='Search Results' />
      <Grid data={searchResults} />
    </>
  )
}

export default MovieResults
