import React, { useRef, useState } from 'react';
import './Intro.css';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { meal } from '../../constants';

const Intro = () => {
  const [play, setPlay] = useState(false);
  const vidRef = useRef();
  const handleVideo = () => {
    setPlay((prev) => !prev);
    if (play) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };
  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
        ref={vidRef}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          {play ? (
            <BsPauseFill color="red" fontSize={30} />
          ) : (
            <BsFillPlayFill color="blue" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
