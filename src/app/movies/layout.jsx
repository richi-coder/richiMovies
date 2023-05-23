import Link from "next/link"
import { Suspense } from "react"
import Loading from "../loading"
import Header from "./Header"

function layout({children}) {
    
  return (
    <div className="w-full h-full relative">
        <Header />
        {children}
    </div>
  )
}

export default layout