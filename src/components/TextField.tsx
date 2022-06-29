const TextField = ({ className = null, multiline = null, ...props }) => {
  return multiline ? (
    <textarea
      {...props}
      className={`${textFieldStyle} resize-none ${(className = null)}`}
    />
  ) : (
    <input
      {...props}
      style={{ outline: 'none' }}
      className={`${textFieldStyle} h-8 ${(className = null)}`}
    />
  )
}

const textFieldStyle =
  'text-[13px] border-b-[1px] outline-none w-full border-b-neutral-200 duration-300 focus:border-b-black'

export default TextField
