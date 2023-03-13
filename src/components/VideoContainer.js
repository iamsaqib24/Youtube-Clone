import React, { useEffect, useState } from 'react'
import { MOST_POPULAR_VIDEOS_API } from '../const/constant';
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom';

const VideoContainer = () => {

    const [videos, setVideos] = useState([])

    useEffect(() => {
        mostPopularVideos();
    }, [])

    const mostPopularVideos = async () => {
        try {
            const data = await fetch(MOST_POPULAR_VIDEOS_API)
            const json = await data.json()
            setVideos(json.items)
        } catch (error) {
            console.error(error);
        }
    }

  return (

    <div className="grid grid-flow-row grid-cols-4">
        {videos.map(video => (
        <Link key={video.id} to={"/watch?v=" + video.id}><VideoCard info={video} /></Link>
        ))}

    </div>
  )
}

export default VideoContainer
