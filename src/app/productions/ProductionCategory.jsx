import Image from "next/image";
import { Suspense } from "react";

function ProductionCategory({ movie }) {
  return (
    <Suspense fallback={<div className="text-white">Loading...</div>}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width={200}
        height={300}
        alt={movie.id}
        placeholder="empty"
        className="transition-transform duration-200 hover:scale-105"
      />
    </Suspense>
  );
}

export default ProductionCategory;
