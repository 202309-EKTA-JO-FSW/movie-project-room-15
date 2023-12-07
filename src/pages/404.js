import NotFound from "@/components/NotFound"
import Head from "next/head"

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Movie Land | Page Not found</title>
      </Head>
      <NotFound />
    </>
  )
}
