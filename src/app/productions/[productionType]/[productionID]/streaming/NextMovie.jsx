import Image from "next/image";

function NextMovie({ videoKey, selectVideo, ind, selected }) {
  return (
    <li className={`w-44 h-fit animate-fade-up overflow-hidden mx-auto ${selected ? 'border' : ''} transition-all duration-500`}>
      <button onClick={() => selectVideo(ind)}>
        <Image
          src={`https://img.youtube.com/vi/${videoKey}/0.jpg`}
          width={200}
          height={300}
          alt={videoKey}
          placeholder="empty"
          className="transition-transform duration-200 hover:scale-105"
        />
      </button>
    </li>
  );
}

export default NextMovie;