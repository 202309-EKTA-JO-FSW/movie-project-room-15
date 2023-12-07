import Breadcrumb from "@/components/Breadcrumb"
import Grid from "@/components/Grid"
import { movies, options, baseUrl } from "@/constants"
import Head from "next/head"
import { useRouter } from "next/router"

export async function getStaticPaths() {
  const paths = movies.map((movie) => ({
    params: { category: movie.href },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${baseUrl}/movie/${params.category}?language=en-US&page=1`,
    options,
  )
  const movie = await res.json()

  return { props: { category: movie } }
}

function MovieCategory({ category }) {
  const router = useRouter()
  const categoryName = router.query.category.split("_").join(" ")

  return (
    <>
      <Head>
        <title>Movie land | {categoryName}</title>
      </Head>
      <div className="mx-auto max-w-7xl w-full">
        <Breadcrumb title={categoryName} currentPage="Movies" />
        <Grid data={category.results} />
      </div>
    </>
  )
}

export default MovieCategory
