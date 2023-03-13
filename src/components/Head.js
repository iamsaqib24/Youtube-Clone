import React, { useEffect, useState } from 'react'
import HB from '../assets/images/dark-hb.png'
import Logo from '../assets/images/yt-logo.png'
import UserIcon from '../assets/images/user.png'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../const/constant'

const Head = () => {

    const [searchText, setSearchText] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => getSearchSuggestions(), 200)

        return () => clearTimeout(timer)
    }, [searchText])

    const getSearchSuggestions = async () => {
        const data = await fetch( YOUTUBE_SEARCH_API + searchText)
        const json = await data.json()
        console.log(json);
        setSuggestions(json[1])
    }

    const dispatch = useDispatch()

    const toggleHandler = () => {
        dispatch(toggleMenu())
    }

  return (
    <div className="flex justify-between p-1 m-1 shadow-sm sticky top-0 bg-white">
        <div className="flex">
            <img onClick={() => toggleHandler()} className="h-10 mx-5 cursor-pointer" src={HB} alt="hamburger" />
            <a href="/"><img className="h-10 cursor-pointer" src={Logo} alt="logo" /></a>
        </div>
        <div>
            <div className="m-auto ">
                <input className="w-96 outline-none border border-gray-400 p-2 rounded-l-full" type="text" placeholder="Search"
                    value={searchText} onChange={(e) => setSearchText(e.target.value)}
                        onFocus={() => setShowSuggestion(true)}
                        onBlur={() => setShowSuggestion(false)} />
                <button className="border border-gray-400 p-2 rounded-r-full px-5 py-2 bg-gray-100">🔍</button>
            </div>
            {showSuggestion && (<div className="fixed py-2 px-2 bg-white w-96">
                <ul>
                    {suggestions.map((s) => (
                        <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">{s}</li>
                    ))}
                </ul>
            </div>)}
        </div>
        <div className="">
            <img className="h-10 mr-5" src={UserIcon} alt="user" />
        </div>
    </div>
  )
}

export default Head
