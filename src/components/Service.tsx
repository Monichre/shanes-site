import Image from './Image'

interface ServiceProps {
  thumb: string
  title: string
  desc?: string
  className?: any
  children?: any
}

const Service: React.FunctionComponent<ServiceProps> = ({
  thumb,
  title,
  desc,
  className,
  children,
}) => {
  return (
    <div
      className={`service group relative flex rounded-md px-3 py-5 duration-300 hover:bg-gray-50 ${serviceBefore} ${serviceAfter} ${
        className ?? ''
      }`}
    >
      {/* Service Icon */}
      <div className="relative mr-4 w-[50px] flex-shrink-0 self-start bg-white group-hover:bg-gray-50 md:w-auto">
        <Image src={thumb} alt={title} />
      </div>

      {/* Service Content */}
      <div>
        <h2 className="mb-3 text-base font-semibold">{title}</h2>
        {children ? <>{children}</> : <p>{desc}</p>}
      </div>
    </div>
  )
}

const serviceBefore =
  'before:absolute before:left-[21px] before:top-9 before:h-[calc(100%-60px)] before:w-[1px] before:bg-gray-300'
const serviceAfter =
  'after:absolute after:left-[17px] after:bottom-4 after:h-[10px] after:w-[10px] after:rounded-full after:bg-gray-300'

export default Service
