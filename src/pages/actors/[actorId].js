// import React from "react"
// import { useRouter } from "next/router"
// import { useEffect, useState } from "react"

// import { FiCalendar, FiMapPin } from "react-icons/fi"
// import { PiGenderIntersexBold } from "react-icons/pi"

// export async function getStaticPaths() {
//   const res = await fetch("https://api.themoviedb.org/3/person/popular", {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmQ2MmU4MjU1OTNmNTYwNDA2ODZlMGQ4OTdhOGE3YSIsInN1YiI6IjY1NjYxNWY5ZDk1NDIwMDBlMTg5Y2U5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8myS2TO3qG_jpZTb6CsL_0Pi8u1MgqHSa1l8qxKu2W4",
//     },
//   })
//   const people = await res.json()
//   const paths = people.results.map((actor) => ({
//     params: { actorId: actor.id.toString() },
//   }))

//   return {
//     paths,
//     fallback: "blocking",
//   }
// }

// export async function getStaticProps({ params }) {
//   const url = `https://api.themoviedb.org/3/person/${params.actorId}`
//   const moviesURL = `https://api.themoviedb.org/3/person/${params.actorId}/movie_credits`

//   const [actorRes, moviesRes] = await Promise.all([
//     fetch(url, {
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmQ2MmU4MjU1OTNmNTYwNDA2ODZlMGQ4OTdhOGE3YSIsInN1YiI6IjY1NjYxNWY5ZDk1NDIwMDBlMTg5Y2U5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8myS2TO3qG_jpZTb6CsL_0Pi8u1MgqHSa1l8qxKu2W4",
//       },
//     }),
//     fetch(moviesURL, {
//       headers: {
//         accept: "application/json",
//         Authorization:
//           "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmQ2MmU4MjU1OTNmNTYwNDA2ODZlMGQ4OTdhOGE3YSIsInN1YiI6IjY1NjYxNWY5ZDk1NDIwMDBlMTg5Y2U5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8myS2TO3qG_jpZTb6CsL_0Pi8u1MgqHSa1l8qxKu2W4",
//       },
//     }),
//   ])

//   const actor = await actorRes.json()
//   const movies = await moviesRes.json()

//   return {
//     props: {
//       actor,
//       movies,
//     },
//     revalidate: 60,
//   }
// }

// function ActorDetailsPage({ actor }) {
//   // Retrieve the actor's ID from the route
//   const router = useRouter()
//   const { id } = router.query

//   // useState for actorData
//   const [actorData, setActorData] = useState(actor)

//   // useState for relatedMovies
//   const [relatedMovies, setRelatedMovies] = useState([])

//   useEffect(() => {
//     if (!id) return

//     async function fetchData() {
//       try {
//         const actorData = await fetcher(`person/${id}`)
//         setActorData(actorData)

//         // Fetch Actor related movies using the id
//         const actorRelatedMovies = await fetcher(`person/${id}/movie_credits`)
//         setRelatedMovies(actorRelatedMovies.cast)
//       } catch (error) {
//         console.error("Error fetching actor data:", error)
//       }
//     }

//     fetchData()
//   }, [id])

//   console.log(actor)
//   console.log("Image Path:", actorData?.profile_path)
//   console.log("Actor Data:", actorData)
//   console.log("Related Movies:", relatedMovies.cast)

//   return (
//     <main className="flex flex-col lg:grid grid-cols-[40%_60%]  w-full p-4 gap-y-8">
//       <div className="p-4 flex flex-col justify-start  row-start-1 col-start-1 col-end-2 items-center gap-4">
//         <img
//           src={`https://image.tmdb.org/t/p/w500${actorData?.profile_path}`}
//           className="rounded-lg h-[345px] object-cover mt-10"
//           alt="actor_image"
//         />
//         <h3 className="text-black dark:text-black text-center font-semibold text-s ">
//           Popularity: {actor.popularity}{" "}
//         </h3>
//       </div>
//       <div className="flex flex-col col-start-2 row-start-1 text-left gap-5 items-baseline justify-between">
//         <h1 className="text-white font-bold text-4xl">{actorData?.name}</h1>
//         <span className="flex flex-row text-gray-300 font-bold text-sm">
//           <h4>AKA: </h4>
//           {actor.also_known_as.map((tag, index) => (
//             <span className="font-bold text-sm mx-1" key={index}>
//               {tag} -{" "}
//             </span>
//           ))}
//         </span>
//         <span className="flex flex-row justify-start items-center gap-3">
//           <FiCalendar className="w-6 h-6 text-gray-400" />
//           <h3 className="font-semibold text-2xl">
//             {actor.birthday} {actor.deathday ? `-${actor.deathday}` : ""}
//           </h3>
//         </span>
//         <span className="flex flex-row justify-start items-center gap-3">
//           <PiGenderIntersexBold className="w-6 h-6 text-gray-400" />
//           <h3 className="font-semibold text-2xl">
//             {actor.gender === 1 ? "Female" : "Male"}
//           </h3>
//         </span>
//         <span className="flex flex-row justify-start items-center gap-3">
//           <FiMapPin className="w-6 h-6 text-gray-400" />
//           <h3 className="font-semibold text-2xl">{actor.place_of_birth}</h3>
//         </span>
//         <span className="flex flex-col items-start justify-center">
//           <h3 className="text-black dark:text-white font-semibold text-2xl">
//             Biography
//           </h3>
//           <hr className="border-gray-300 dark:border-white border-t-2 w-11/12 mr-16 mt-3 mb-4" />
//           {actor.biography}
//         </span>
//       </div>
//     </main>
//   )
// }

// export default ActorDetailsPage
import { useRouter } from "next/router"
import { options, baseUrl } from "@/constants"
import Head from "next/head"
import Image from "next/image"

export async function getStaticPaths() {
  const res = await fetch(
    `${baseUrl}/person/popular?language=en-US&page=1`,
    options,
  )
  const data = await res.json()

  const paths = data.results.map((actor) => ({
    params: { actorId: actor.id.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${baseUrl}/person/${params.actorId}?language=en-US`,
    options,
  )
  const actorId = await res.json()
  return { props: { actorId } }
}

function Actor({ actorId }) {
  console.log(actorId)
  const router = useRouter()
  const { queryId } = router.query
  return (
    <>
      <Head>
        <title>Movie Land | Actor</title>
      </Head>

      <main className="flex flex-col lg:grid grid-cols-[40%_60%]  w-full p-4 gap-y-8 max-w-7xl px-4 m-auto">
        <div className="p-4 flex flex-col justify-start  row-start-1 col-start-1 col-end-2 items-center gap-4">
          <Image
            src={`https://image.tmdb.org/t/p/w500${actorId.profile_path}`}
            className="rounded-lg h-[345px] object-cover mt-10"
            alt="actor_image"
            width={280}
            height={400}
          />
          <h3 className="text-black dark:text-black text-center font-semibold text-s ">
            Popularity: {actorId.popularity}{" "}
          </h3>
        </div>
        <div className="flex flex-col col-start-2 row-start-1 text-left gap-5 items-baseline justify-between">
          {/* <h1 className="text-white font-bold text-4xl">{actorData?.name}</h1> */}
          <span className="flex flex-row text-gray-300 font-bold text-sm">
            <h4>AKA: </h4>
            {actorId.also_known_as.map((tag, index) => (
              <span className="font-bold text-sm mx-1" key={index}>
                {tag} -{" "}
              </span>
            ))}
          </span>
          <span className="flex flex-row justify-start items-center gap-3">
            {/* <FiCalendar className="w-6 h-6 text-gray-400" /> */}
            <h3 className="font-semibold text-2xl">
              {actorId.birthday}{" "}
              {actorId.deathday ? `-${actorId.deathday}` : ""}
            </h3>
          </span>
          <span className="flex flex-row justify-start items-center gap-3">
            {/* <PiGenderIntersexBold className="w-6 h-6 text-gray-400" /> */}
            <h3 className="font-semibold text-2xl">
              {actorId.gender === 1 ? "Female" : "Male"}
            </h3>
          </span>
          <span className="flex flex-row justify-start items-center gap-3">
            {/* <FiMapPin className="w-6 h-6 text-gray-400" /> */}
            <h3 className="font-semibold text-2xl">{actorId.place_of_birth}</h3>
          </span>
          <span className="flex flex-col items-start justify-center">
            <h3 className="text-black dark:text-white font-semibold text-2xl">
              Biography
            </h3>
            <hr className="border-gray-300 dark:border-white border-t-2 w-11/12 mr-16 mt-3 mb-4" />
            {actorId.biography}
          </span>
        </div>
      </main>
    </>
  )
}

export default Actor
