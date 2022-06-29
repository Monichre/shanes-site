import { FeaturedAudio } from './Portfolio'
import SectionTitle from './SectionTitle'
import Shape from './Shape'

const Portfolios = ({ audioSamples }) => {
  return (
    <section
      className="relative bg-gray-50 pt-[100px] pb-[100px] lg:pb-[200px]"
      id="portfolio"
    >
      <div className="container">
        <SectionTitle title="Portfolio" />

        <div className="grid gap-7 sm:grid-cols-2 md:grid-cols-3">
          {audioSamples.map((sample) => (
            <FeaturedAudio {...sample} />
          ))}
        </div>
      </div>

      <Shape />
    </section>
  )
}

export default Portfolios
