import '../styles/globals.css'

import Head from "next/head"

const Rokstar = ({Component, pageProps}) => {
    return (
        <>
            <Head>
                <title>Shane Ellis :: Musician | Drummer</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}

export default Rokstar
