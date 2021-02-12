import React, {useRef, useState} from 'react';
import VideoFooter from './components/VideoFooter';
import "./video.css";
import VideoSidebar from './components/VideoSidebar';

function Video({url, channel, description, song, messages, shares, likes}) {
    const [playing, setPlaying] = useState(false)  
    const videoRef = useRef(null);  
    const handleVideoPress = () =>{
        // if video is playing pause otherwise play it
        if (playing){
            videoRef.current.pause();
            setPlaying(false);
        }
        else{
            videoRef.current.play();
            setPlaying(true)
        }
    }

    return (
        <div className="video">
            <video
            onClick={handleVideoPress}
                className='video__player'
                loop
                ref={videoRef}
                src={url}
            />

            <VideoFooter 
            channel={channel}
            description={description}
            song={song}
             />

            <VideoSidebar likes={likes} shares={shares} messages={messages} />
        </div >
    )
}

export default Video
