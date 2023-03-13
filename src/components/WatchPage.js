import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { closeMenu } from '../utils/appSlice'
import RelatedVideos from './RelatedVideos'

const WatchPage = () => {

    const [searchParams] = useSearchParams()

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(closeMenu())
    }, [])

  return (
    <div className="flex">
        <div className="px-5 py-5">
          <iframe width="1000" height="500" src={"https://www.youtube.com/embed/" + searchParams.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
        <div>

        </div>

      <div className="px-5 py-5">
        <RelatedVideos />
      </div>
    </div>
  )
}

export default WatchPage
