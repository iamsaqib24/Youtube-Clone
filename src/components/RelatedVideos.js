import React, { useEffect } from 'react'
import { RELATED_VIDEO_API } from '../const/constant'

const RelatedVideos = () => {

    useEffect(() =>{
        getRelatedVideos()
    },[])

    const getRelatedVideos = async () => {
        const data = await fetch(RELATED_VIDEO_API)
        const json = await data.json()
        console.log("Api related videos : " + json);
    }

  return (
    <div>RelatedVideos</div>
  )
}

export default RelatedVideos
