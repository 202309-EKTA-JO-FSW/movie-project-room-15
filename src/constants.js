export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiYmQ2MmU4MjU1OTNmNTYwNDA2ODZlMGQ4OTdhOGE3YSIsInN1YiI6IjY1NjYxNWY5ZDk1NDIwMDBlMTg5Y2U5YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.8myS2TO3qG_jpZTb6CsL_0Pi8u1MgqHSa1l8qxKu2W4`,
  },
}

export const baseUrl = 'https://api.themoviedb.org/3'

export const movies = [
  {
    name: 'Top Rate',
    href: 'top_rated',
  },
  {
    name: 'Popular',
    href: 'popular',
  },
  {
    name: 'Now playing',
    href: 'now_playing',
  },
  {
    name: 'Upcoming',
    href: 'upcoming',
  },
]

export const genres = [
  {
    id: 28,
    name: 'Action',
  },
  {
    id: 12,
    name: 'Adventure',
  },
  {
    id: 16,
    name: 'Animation',
  },
  {
    id: 35,
    name: 'Comedy',
  },
  {
    id: 80,
    name: 'Crime',
  },
  {
    id: 99,
    name: 'Documentary',
  },
  {
    id: 18,
    name: 'Drama',
  },
  {
    id: 10751,
    name: 'Family',
  },
  {
    id: 14,
    name: 'Fantasy',
  },
  {
    id: 36,
    name: 'History',
  },
  {
    id: 27,
    name: 'Horror',
  },
  {
    id: 10402,
    name: 'Music',
  },
  {
    id: 9648,
    name: 'Mystery',
  },
  {
    id: 10749,
    name: 'Romance',
  },
  {
    id: 878,
    name: 'Science Fiction',
  },
  {
    id: 10770,
    name: 'TV Movie',
  },
  {
    id: 53,
    name: 'Thriller',
  },
  {
    id: 10752,
    name: 'War',
  },
  {
    id: 37,
    name: 'Western',
  },
]
const apiKey = 'bbd62e825593f56040686e0d897a8a7a'
