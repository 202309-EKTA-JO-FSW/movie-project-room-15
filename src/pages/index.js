import Image from "next/image"
import { Inter } from "next/font/google"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import OurTeam from "@/components/OurTeam"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  return (
    <>
      <Hero />
      <OurTeam />
    </>
  )
}
