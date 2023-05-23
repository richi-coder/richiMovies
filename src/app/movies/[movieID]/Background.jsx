function Background({ backgroundURL }) {
  return (
    <div
        className='fixed h-screen w-screen -z-10 duration-500'
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/original${backgroundURL})`, backgroundRepeat: 'no-repeat', backgroundSize: '100%'}}
    >
        <div className='h-full w-full bg-gradient-to-r from-black from-[15vw] sm:from-[10vw] via-transparent via-[80vw] to-transparent to-[50vw] sm:to-[40vw]'></div> 
        {/* This is decoration */}
    </div>
  )
}

export default Background