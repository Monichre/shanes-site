import Service from './Service'
import Shape from './Shape'

const Services = ({ rates }) => {
  return (
    <section
      className="service-area relative"
      id="services"
      style={{ marginLeft: 'auto' }}
    >
      <div className="container md:grid md:grid-cols-2 lg:gap-7">
        {rates.map((rate, i) => (
          <Service
            key={`rate-${i}`}
            className={null}
            desc={`$${rate.hourly}/hr`}
            title={rate.type}
            thumb={`/images/drumstick.png`}
          />
        ))}
      </div>

      <Shape fillColor="#F9FAFB" />
    </section>
  )
}

export default Services

// import Service from './Service'
// import Shape from './Shape'
// import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

// const Services = ({ classDescription }) => {
//   console.log('classDescription: ', classDescription)
//   return (
//     <section
//       className="service-area relative pb-[100px] lg:pb-[200px]"
//       id="services"
//     >
//       <div className="container md:grid md:grid-cols-3 lg:gap-7">
//         <Service
//           key={'classDescription'}
//           title={classDescription.name}
//           // thumb={`/images/${service.icon}`}
//         >
//           {documentToReactComponents(classDescription.content.json)}
//         </Service>
//       </div>

//       <Shape fillColor="#F9FAFB" />
//     </section>
//   )
// }

// export default Services
