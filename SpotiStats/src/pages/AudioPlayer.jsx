import React, {useRef, useState} from 'react'
import { FaPlay } from "react-icons/fa6";
import { FaPause } from "react-icons/fa";

const AudioPlayer = ({source}) => {
    const audioRef = useRef(null)
    const [icon, setIcon] = useState(<FaPlay color="white" />)
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlayingAudio = () => {
        
        if(isPlaying){
            setIsPlaying(false)
            audioRef.current.pause()
            setIcon(<FaPlay color="white" />)    
        }
        else{
            setIsPlaying(true)
            audioRef.current.play()
            setIcon(<FaPause color="white" />)
        }
       
    }

    return (
    <div>
        <button onClick={handlePlayingAudio}>{icon}</button>
        <audio ref={audioRef} onChange={handlePlayingAudio}>
            <source src={source}/>
        </audio>
    </div>
  )
}

export default AudioPlayer