import React from "react"
import { options, baseUrl } from "@/constants"
import Image from "next/image"
import Head from "next/head"
import SectionHeading from "@/components/SectionHeading"
import Link from "next/link"

export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/person/popular`, options)
  const actors = await res.json()
  return { props: { actors: actors.results } }
}

export default function Actors({ actors }) {
  return (
    <>
      <Head>
        <title>Movie Land | Actors</title>
      </Head>

      <SectionHeading title="Top 20 Hollywood Popular Celebrity!" />
      <div className=" max-w-7xl px-4 m-auto">
        <div className="grid-cols-1 sm:grid md:grid-cols-5 mb-10">
          {actors.map((actor) => (
            <Link href={`/actors/${actor.id}`} key={actor.id}>
              <div className=" mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] sm:shrink-0 sm:grow sm:basis-0">
                <Image
                  width={300}
                  height={300}
                  className="rounded-lg h-[345px] object-cover"
                  src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                  alt={actor.name + "profile photo"}
                  priority={false}
                  quality={60}
                />
              </div>
              <div className="p-5">
                <h5 className="font-sans font-bold mb-2 text-xl leading-tight text-neutral-800">
                  {actor.name}
                </h5>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  )
}
