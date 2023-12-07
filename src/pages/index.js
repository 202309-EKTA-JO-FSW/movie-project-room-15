import Divider from '@/components/Divider'
import Grid from '@/components/Grid'
import Hero from '@/components/Hero'
import OurTeam from '@/components/OurTeam'
import SectionHeading from '@/components/SectionHeading'
import { options, baseUrl } from '@/constants'
import Head from 'next/head'
import React from 'react'

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/movie/now_playing?language=en-US`, options)
  const data = await res.json()
  return { props: { latestMovies: data.results } }
}
export default function Home({ latestMovies }) {
  return (
    <>
      <Head>
        <title>Movie Land</title>
      </Head>
      <SectionHeading title='Latest movies' />
      <Grid data={latestMovies} />
      <Divider />
      <OurTeam />
    </>
  )
}
