export default function SectionHeading({ title = 'Title' }) {
  return (
    <div className='py-10'>
      <div className='mx-auto max-w-7xl px-2 sm:px-4 lg:px-8'>
        <h3 className=' text- text-3xl font-bold leading-6 text-gray-900'>{title} </h3>
      </div>
    </div>
  )
}
