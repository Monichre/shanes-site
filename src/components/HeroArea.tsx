import Shape from './Shape'

const heroBg = '/images/hero-bg.jpg'

const HeroArea = ({ hero: {title, photo: {url}} }) => {
  return (
    <section
      id="hero"
      style={{ backgroundImage: `url(${url})` }}
      className="relative flex h-[300px] items-center bg-cover bg-center bg-no-repeat sm:h-[450px] md:h-[500px] lg:h-[600px] xl:h-[800px]"
    >
      <div className="container">
        <div className="mt-8 font-light">
          <h1 className="text-3xl font-light leading-none text-white sm:text-[45px] md:text-[55px]">
            {title}
          </h1>
          <h2 className="text-md mt-2 font-light tracking-4 text-white sm:mt-4 sm:text-lg">
            Musician | Drummer
          </h2>
        </div>
      </div>

      <Shape className="hidden md:block" />
    </section>
  )
}

export default HeroArea
