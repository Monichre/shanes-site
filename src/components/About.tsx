import { Box, Flex } from 'rebass'

import Image from 'next/image'
import SectionTitle from './SectionTitle'
import Services from './Services'
import SocialMedia from './SocialMedia'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

const AboutMe = ({
  aboutMe: {
    name,
    content,
    photo: { url },
  },
}) => {
  return (
    <section
      className="pt-[80px] pb-[60px] lg:pt-[100px] lg:pb-[125px]"
      id="about"
    >
      <div className="container">
        <SectionTitle title={name} className="lg:hidden" />

        <div className="grid-cols-12 items-center md:grid">
          <div className="col-span-4 sm:text-center md:text-left">
            <div className="relative inline-block leading-none drop-shadow-thumb sm:before:absolute sm:before:bottom-[-20px] sm:before:right-[-25px] sm:before:h-full sm:before:w-[calc(100%-20px)] sm:before:rounded-br-3xl sm:before:border-2 sm:before:border-white-light md:block lg:before:bottom-[-45px]">
              <Image
                width={350}
                height={470}
                className="rounded-md"
                src={`${url}`}
              />
            </div>
          </div>

          <div className="col-start-6 col-end-13">
            <div className="bio mt-5 sm:mt-10 md:mt-0">
              <SectionTitle title="About Me" className="hidden lg:block" />

              {documentToReactComponents(content.json)}

              <SocialMedia className="mt-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ClassDescription = ({
  classDescription: {
    name,
    content,
    photo: { url },
  },
  rates,
}) => {
  return (
    <section
      className="pt-[80px] pb-[60px] lg:pt-[100px] lg:pb-[125px]"
      id="services"
    >
      <div className="container">
        <SectionTitle title={name} className="lg:hidden" />

        <div className="grid-cols-12 items-center md:grid">
          <div className="col-start-9 col-end-13 ">
            <div className="relative inline-block leading-none drop-shadow-thumb sm:before:absolute sm:before:bottom-[-20px] sm:before:right-[-25px] sm:before:h-full sm:before:w-[calc(100%-20px)] sm:before:rounded-br-3xl sm:before:border-2 sm:before:border-white-light md:block lg:before:bottom-[-45px]">
              <Image
                width={350}
                height={470}
                className="rounded-md"
                src={`${url}`}
              />
            </div>
          </div>
          <div className="col-span-8 col-start-1 row-start-1 sm:text-center md:text-left">
            <div className="bio mt-5 sm:mt-10 md:mt-0">
              <SectionTitle
                title="Class Description"
                className="hidden lg:block"
              />

              {documentToReactComponents(content.json)}

              <SocialMedia className="mt-10" />
            </div>
            <Flex my={48}>
              <Box mr={12}>
                <SectionTitle title={'Rates'} className="hidden lg:block" />
              </Box>
              <Box ml={'auto'}>
                <Services rates={rates} />
              </Box>
            </Flex>
          </div>
        </div>
      </div>
    </section>
  )
}

export { ClassDescription, AboutMe }
