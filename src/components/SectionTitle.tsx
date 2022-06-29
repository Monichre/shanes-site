const SectionTitle = ({ title, className = null }) => {
  return (
    <div className={`mb-12 ${className ?? ''}`}>
      <h2 className="relative pb-4 font-heading text-3xl tracking-normal text-dark before:absolute before:left-0 before:bottom-0 before:h-[5px] before:w-[55px] before:bg-dark after:absolute after:left-0 after:bottom-[2px] after:h-[1px] after:w-[255px] after:bg-dark">
        {title}
      </h2>
    </div>
  )
}

export default SectionTitle
