import NextImage from 'next/image'

const Image = ({ src, ...props }) => {
  return (
    <>
      <div className="custom-image w-full">
        <NextImage
          src={src}
          layout="fill"
          objectFit="contain"
          className="!relative !h-unset !w-full"
          {...props}
        />
      </div>
      <style jsx global>{`
        .custom-image > span {
          position: unset !important;
        }
      `}</style>
    </>
  )
}

export default Image
