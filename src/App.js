import axios from './axios';
import './App.css';
  import Video from './video';
import React, {useEffect, useState} from 'react';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    async function fetchPosts() {
      const res = await axios.get('/gt/posts');
      setVideos(res.data);

      return res; 
    }
    fetchPosts();
  },[]);

  console.log(videos);

  return (
    <div className="app">
      <div className='app__videos'>
        {videos.map(({url, channel, description, likes, song,messages,shares}) => (
          <Video
            url={url}
            channel={channel}
            description={description}
            likes={likes}
            song={song}
            messages={messages}
            shares={shares}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
