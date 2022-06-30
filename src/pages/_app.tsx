import '../styles/globals.css'

import Head from 'next/head'
import ReactGA from 'react-ga'

const App = ({ Component, pageProps }) => {
  ReactGA.initialize('G-YYZ9XMRYWV')
  return (
    <>
      <Head>
        <title>Shane Ellis :: Musician | Drummer</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
