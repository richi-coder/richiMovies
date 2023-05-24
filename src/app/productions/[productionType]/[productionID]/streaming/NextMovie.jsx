import Image from "next/image";

function NextMovie({ videoKey }) {
  return (
    <li className="w-44 h-fit animate-fade-up overflow-hidden mx-auto">
        <Image
          src={`https://img.youtube.com/vi/${videoKey}/0.jpg`}
          width={200}
          height={300}
          alt={videoKey}
          placeholder="empty"
          className="transition-transform duration-200 hover:scale-105"
        />
    </li>
  );
}

export default NextMovie;