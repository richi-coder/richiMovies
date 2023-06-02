import Image from "next/image";

function ProductionCategory({ movie }) {
    const options = {
        size: 10
    }
  return (
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width={200}
        height={300}
        alt={movie.id}
        placeholder="emty"
        className="transition-transform duration-200 hover:scale-105"
      />
  );
}

export default ProductionCategory;
