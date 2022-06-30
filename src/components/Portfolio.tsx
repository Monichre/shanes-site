import { MusicItem, VideoItem } from '../pages'

import Image from './Image'
import Link from 'next/link'
import ReactAudioPlayer from 'react-audio-player'
import { VscPlayCircle } from 'react-icons/vsc'
import dynamic from 'next/dynamic'
import { useState } from 'react'

const ModalVideo: any = dynamic(() => import('react-modal-video'), {
  ssr: false,
})

const FeaturedVideo = ({ title, photo, video }: VideoItem) => {
  const [isOpen, setOpen] = useState(false)
  let channel, videoId

  return (
    <>
      <div
        className={`relative overflow-hidden rounded-md duration-400 hover:drop-shadow-portfolio ${
          video ? bgOverlay : ''
        }`}
      >
        <Link href="/">
          <a>
            <Image src={photo.url} alt={title} />
          </a>
        </Link>
        {video && (
          <button
            className="absolute inset-0 z-10 w-full text-6xl text-white"
            onClick={() => setOpen(true)}
          >
            <VscPlayCircle className="inline" />
          </button>
        )}
      </div>

      {video && (
        <ModalVideo
          autoplay
          isOpen={isOpen}
          channel={channel}
          videoId={video.url}
          onClose={() => setOpen(false)}
        />
      )}
    </>
  )
}

const FeaturedAudio = ({ audio, photo: { url }, title }: MusicItem) => {
  return (
    <>
      <div
        className={`relative overflow-hidden rounded-md duration-400 hover:drop-shadow-portfolio ${
          !audio ? bgOverlay : ''
        }`}
      >
        <h2 className="mb-3 text-base font-semibold">{title}</h2>
        <Image src={url} alt={title} />
        {audio && (
          <ReactAudioPlayer
            style={{ margin: '24px auto 0', width: '100%' }}
            src={audio.url}
            controls
          />
        )}
      </div>
    </>
  )
}

const bgOverlay =
  'after:absolute after:bg-black after:inset-0 after:opacity-0 after:duration-400 hover:after:opacity-30'

export { FeaturedAudio, FeaturedVideo }
