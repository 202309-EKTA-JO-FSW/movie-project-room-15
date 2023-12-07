export default function Divider() {
  return (
    <div className='relative mx-auto px-2 py-10 sm:px-4 lg:px-8'>
      <div className='absolute inset-0 flex items-center' aria-hidden='true'>
        <div className='w-full border-t border-gray-300' />
      </div>
      <div className='relative flex justify-center'>
        <span className='bg-white px-2 text-gray-500'></span>
      </div>
    </div>
  )
}
