// import "dotenv/config";
const REACT_APP_KEY = "AIzaSyB89pWue4QxgQ_mnivNKk9topC0mzQG4vs";

export const MOST_POPULAR_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  REACT_APP_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=";

export const RELATED_VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&key=" +
  REACT_APP_KEY;
