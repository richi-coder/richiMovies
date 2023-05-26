import DetailComponent from './DetailComponent'

function Details({ data }) {
  return (
    <div className='w-full pt-6 sm:pt-24 bg-black -mt-2'>
        <p className='text-3xl pl-12 sm:pl-24 font-bold py-5'>Details</p>
        <div className='pb-5 sm:pb-10 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left px-0 sm:px-24 gap-y-8 sm:gap-y-16 gap-x-5'>
            <DetailComponent title='Adult' detail={data.adult} />
            <DetailComponent title='Genres' detail={data.genres} />
            <DetailComponent title='First Air Date' detail={data.first_air_date} />
            <DetailComponent title='Last Air Date' detail={data.last_air_date} />
            <DetailComponent title='Last Episode to Air' detail={data.last_episode_to_air} />
            <DetailComponent title='Homepage' detail={data.homepage} />
            <DetailComponent title='In production' detail={data.in_production} />
            <DetailComponent title='Original Language' detail={data.original_language} />
            <DetailComponent title='Original Title' detail={data.original_title || data.original_name} />
            <DetailComponent title='Number of episodes' detail={data.number_of_episodes} />
            <DetailComponent title='Number of seasons' detail={data.number_of_seasons} />
            <DetailComponent title='Popularity' detail={data.popularity} />
            <DetailComponent title='Production Companies' detail={data.production_companies} />
            <DetailComponent title='Production Countries' detail={data.production_countries} />
            <DetailComponent title='Release Date' detail={data.release_date} />
            <DetailComponent title='Revenue' detail={data.revenue} />
            <DetailComponent title='Spoken Languages' detail={data.spoken_languages} />
            <DetailComponent title='Status' detail={data.status} />
            <DetailComponent title='Vote average' detail={data.vote_average} />
            <DetailComponent title='Created by' detail={data.created_by} />
            <DetailComponent title='Networks' detail={data.networks} />
        </div>
    </div>
  )
}

export default Details

