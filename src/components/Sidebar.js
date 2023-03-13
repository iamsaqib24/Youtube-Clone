import React from 'react'
import Home from '../assets/images/home.png'
import Shorts from '../assets/images/reels.png'
import Subscribe from '../assets/images/subscribe.png'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'



function Sidebar() {

  const isHamOpen = useSelector((store) => store.app.isHamOpen)

  if(!isHamOpen) return null

  return (
    <div className="w-64 shadow-md p-4 z-10">
      <ul className="">
        <li className="cursor-pointer p-2"><Link to="/"><img className="h-5 mb-1 mr-3 inline" src={Home} alt="home" /> Home</Link></li>
        <li className="cursor-pointer p-2"><Link to="/"><img className="h-5 mb-1 mr-3 inline" src={Shorts} alt="shorts" /> Shorts</Link></li>
        <li className="cursor-pointer p-2"><Link to="/"><img className="h-5 mb-1 mr-3 inline" src={Subscribe} alt="subscribe" /> Subscriptions</Link></li>
      </ul>

      <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

      <ul>
        <li className="cursor-pointer p-2">Library</li>
        <li className="cursor-pointer p-2">History</li>
        <li className="cursor-pointer p-2">Your Videos</li>
        <li className="cursor-pointer p-2">Watch Later</li>
        <li className="cursor-pointer p-2">Liked Videos</li>
      </ul>

      <hr className="h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>

    </div>
  )
}

export default Sidebar
