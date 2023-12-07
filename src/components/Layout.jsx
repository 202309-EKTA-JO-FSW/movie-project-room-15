import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Layout({ children, setSearchResults, setQuery, query }) {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
      <Navbar setQuery={setQuery} query={query} />
      {children}
      <Footer />
    </div>
  )
}
