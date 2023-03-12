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

    <div className="flex flex-wrap">
        {videos.map(video => (
        <Link to={"/watch?v=" + video.id}><VideoCard key={video.id} info={video} /></Link>
        ))}

    </div>
  )
}

export default VideoContainer
