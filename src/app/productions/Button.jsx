'use client';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const scroller = (directionValue, scrollerRef) => {
    scrollerRef.current.scrollBy({
        left: directionValue,
        behavior: 'smooth'
    })
}

function Button({ positionClassname, scrollerRef }) {
    const direction = positionClassname === 'right-0 -translate-x-7' ? true : false;
    function scrollCategory() {
    direction ?
        scroller(195, scrollerRef) :
        scroller(-195, scrollerRef)
    }
  return (
    <button
        onClick={scrollCategory} 
        className={`absolute top-1/2 -translate-y-1/2 rounded bg-slate-500 opacity-70 hover:scale-105 transition-transform duration-200 px-2 py-2 z-10 ${positionClassname}`}>
        {direction ? <FaAngleRight /> : <FaAngleLeft />}
    </button>
  )
}

export default Button