import DetailComponent from './DetailComponent'

function Details({ data }) {
  return (
    <div className='w-full animate-fade-up bg-gradient-to-t from-black from-80% to-transparent to-90% pt-16'>
        <p className='text-3xl pl-24 font-bold mb-16'>Details</p>
        <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left px-24 gap-y-16 gap-x-5'>
            <DetailComponent title='Adult' detail={data.adult} />
            <DetailComponent title='Genres' detail={data.genres} />
            <DetailComponent title='Homepage' detail={data.homepage} />
            <DetailComponent title='Original Language' detail={data.original_language} />
            <DetailComponent title='Original Title' detail={data.original_title} />
            <DetailComponent title='Popularity' detail={data.popularity} />
            <DetailComponent title='Production Companies' detail={data.production_companies} />
            <DetailComponent title='Production Countries' detail={data.production_countries} />
            <DetailComponent title='Release Date' detail={data.release_date} />
            <DetailComponent title='Revenue' detail={data.revenue} />
            <DetailComponent title='Spoken Languages' detail={data.spoken_languages} />
            <DetailComponent title='Status' detail={data.spoken_languages} />
            <DetailComponent title='Vote average' detail={data.vote_average} />
        </div>
    </div>
  )
}

export default Details

