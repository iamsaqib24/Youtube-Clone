import React from 'react'
import Home from '../assets/images/home.png'
import Shorts from '../assets/images/reels.png'
import Subscribe from '../assets/images/subscribe.png'
import { useSelector } from 'react-redux'



function Sidebar() {

  const isHamOpen = useSelector((store) => store.app.isHamOpen)

  if(!isHamOpen) return null

  return (
    <div className="w-56 shadow-md p-4">
      <ul className="">
        <li className="cursor-pointer p-2"><img className="h-5 mb-1 mr-3 inline" src={Home} alt="home" /> Home</li>
        <li className="cursor-pointer p-2"><img className="h-5 mb-1 mr-3 inline" src={Shorts} alt="shorts" /> Shorts</li>
        <li className="cursor-pointer p-2"><img className="h-5 mb-1 mr-3 inline" src={Subscribe} alt="subscribe" /> Subscriptions</li>
      </ul>
    </div>
  )
}

export default Sidebar
