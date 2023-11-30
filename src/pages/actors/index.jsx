import React from 'react'

export async function getStaticProps() {
  const res = await fetch('https://api.themoviedb.org/3/person/popular', {
    method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmQ2MmU4MjU1OTNmNTYwNDA2ODZlMGQ4OTdhOGE3YSIsInN1YiI6IjY1NjYxNWY5ZDk1NDIwMDBlMTg5Y2U5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8myS2TO3qG_jpZTb6CsL_0Pi8u1MgqHSa1l8qxKu2W4'
  }})
  const actors = await res.json()
  return { props: { actors } }
}

export default function Actors({ actors }) {

  const popularActors = actors.results.map((actor) => {
    
     return (
      <div key={actor.id}>
    <a href="#!">
     <div
       className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]  sm:shrink-0 sm:grow sm:basis-0"> 
         <img
           className="rounded-lg"
           src={actor.name === "Robb Guinto" ? "https://image.tmdb.org/t/p/w500/gYs7kSFwr89BOHG2rxEOet17C2y.jpg" :`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
           alt={actor.name + " profile photo"} />
       <div className="p-5">
         <h5
           className="font-sans font-bold mb-2 text-xl leading-tight text-neutral-800">
           {actor.name}
         </h5>
         </div> 
       </div>
       </a>
     </div>
  )
  })

  return (
    <div>
      <h2 className='font-sans font-bold text-xl mt-28 ml-12'>Top 20 Hollywood Popular Celebrity! </h2>
      <div className="grid-cols-1 sm:grid md:grid-cols-5 mx-10 mt-0.5 mb-10">
      {popularActors}
      </div>
      </div>
  )
}

