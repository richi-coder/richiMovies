import Image from "next/image";
import Link from "next/link";
import FallbackMovie from "@/app/search/components/FallbackMovie";

export default function ResultProduction({ searchedProduction: movie }) {
  const imageURL = movie.poster_path || movie.backdrop_path;
  
  return (
    <li className="w-44 h-fit animate-fade-up overflow-hidden mx-auto">
      <Link href={`/productions/${movie.media_type}/${movie.id}`} className='h-fit'>
    {
        imageURL ?
        <Image
          src={`https://image.tmdb.org/t/p/w500${imageURL}`}
          width={200}
          height={300}
          alt={movie.id}
          placeholder="empty"
          className="transition-transform duration-200 hover:scale-105"
        /> :
        <FallbackMovie movie={movie} />
        }
      </Link>
    </li>
  );
}