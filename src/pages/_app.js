import Layout from '@/components/Layout'
import '@/styles/globals.css'
import React from 'react'

export default function App({ Component, pageProps }) {
  const [query, setQuery] = React.useState('')

  return (
    <Layout query={query} setQuery={setQuery}>
      <Component {...pageProps} query={query} />
    </Layout>
  )
}
