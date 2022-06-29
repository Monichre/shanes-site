import { AboutMe, ClassDescription } from '../components/About'
import {
  GET_ALL_MUSIC,
  GET_BIO,
  GET_CLASS_DESCRIPTION,
  GET_CONTACT,
  GET_HERO,
  GET_RATES,
} from '../lib/queries'
import { useEffect, useState } from 'react'

import Contact from '../components/Contact'
import Header from '../components/Header'
import HeroArea from '../components/HeroArea'
import Portfolios from '../components/Portfolios'
import Preloader from '../components/Preloader'
import { getQuery } from '../lib/api'

const Home = ({
  aboutMe,
  hero,
  audioSamples,
  classDescription,
  rates,
  contactInfo,
}) => {
  const [preloaded, setPreloaded] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setPreloaded(true)
    }, 800)
  }, [])

  return (
    <div className="rokstar">
      <Preloader preloaded={preloaded} />
      <Header />
      <HeroArea hero={hero} />
      <AboutMe aboutMe={aboutMe} />
      <ClassDescription classDescription={classDescription} rates={rates} />

      <Portfolios audioSamples={audioSamples} />
      <Contact contactInfo={contactInfo} />
      {/* <Footer /> */}
    </div>
  )
}

export type Section = {
  content: {
    json: any
  }
  photo: {
    url: string
  }
  name: string
}

export type MusicItem = {
  audio: {
    url: string
  }
  photo: {
    url: string
  }
  title: string
}

export type VideoItem = {
  video: {
    url: string
  }
  photo: {
    url: string
  }
  title: string
}

export type MusicQueryRes = {
  data: {
    musicCollection: {
      items: MusicItem[]
    }
  }
}

export type SectionQueryRes = {
  data: {
    section: Section
  }
}

export type Hero = {
  title: string
  photo: {
    url: string
  }
}

export type HeroQueryRes = {
  data: {
    hero: Hero
  }
}

export async function getStaticProps() {
  const {
    data: { section: aboutMe },
  }: SectionQueryRes = await getQuery(GET_BIO)

  const {
    data: { section: classDescription },
  }: SectionQueryRes = await getQuery(GET_CLASS_DESCRIPTION)

  const {
    data: {
      musicCollection: { items: audioSamples },
    },
  }: MusicQueryRes = await getQuery(GET_ALL_MUSIC)

  const {
    data: { hero },
  }: HeroQueryRes = await getQuery(GET_HERO)

  const {
    data: {
      ratesCollection: { items: rates },
    },
  } = await getQuery(GET_RATES)

  const {
    data: {
      linkCollection: { items: contactInfo },
    },
  } = await getQuery(GET_CONTACT)

  return {
    props: {
      aboutMe,
      hero,
      audioSamples,
      classDescription,
      rates,
      contactInfo,
    },
  }
}

export default Home
