export default function FallbackMovie({ movie }) {
  return (
    <div className='w-full h-[265px] bg-gray-500 text-white relative'>
        <p className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{movie.original_title}</p>
    </div>
  )
}