export default function LoadingCountries() {
  return (
    <div className='grid gap-8 grid-cols-auto md:gap-8'>
      {Array.from({ length: 12 }).map((_, index) => (
        <SkeletonCountry key={index} />
      ))}
    </div>
  );
}

export function SkeletonCountry() {
  return (
    <div className='flex h-96 w-full max-w-xs flex-col overflow-hidden rounded-md bg-gray-500 shadow-card transition-colors duration-500 ease-in dark:bg-brand-500'>
      <div className=' h-[180px] w-full animate-pulse rounded-t-md bg-gray-500'></div>

      <div className='ml-2 mt-4 h-6  w-32 animate-pulse rounded-full bg-gray-500'></div>
      <div className='ml-2 pt-4'>
        <div className='mt-2 h-4 w-32 animate-pulse rounded-full bg-gray-500'></div>
        <div className='mt-2 h-4 w-32 animate-pulse rounded-full bg-gray-500'></div>
        <div className='mt-2 h-4 w-32 animate-pulse rounded-full bg-gray-500'></div>
        <div className='mt-2 h-4 w-32 animate-pulse rounded-full bg-gray-500'></div>
      </div>
    </div>
  );
}
