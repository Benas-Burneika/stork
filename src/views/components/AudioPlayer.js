import { useRef, useState } from "react";
import { css } from "@emotion/css";

// Assets
import {ReactComponent as MusicPlay} from '../../assets/btn-music.svg';
import {ReactComponent as MusicPause} from '../../assets/btn-music-remove.svg';
import backgroundMusic from "../../assets/sfx/background-music.mp3";

function AudioPlayer() {
  const [musicStatus, setMusic] = useState(false);
  const ref = useRef();

  const playMusic = () => {
      ref.current.play();
      ref.current.volume = 0.1;
      setMusic(true);
  }

  const pauseMusic = () => {
      ref.current.pause();
      setMusic(false);
  }

  const btn_music = css`
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: inherit;
    border: none;
  `;

  return (
    <div>
        <audio ref={ref} src={backgroundMusic} loop />
        {musicStatus ? (
            <button onClick={pauseMusic} className={btn_music}>
                <MusicPlay />
            </button>
        ) : (
            <button onClick={playMusic} className={btn_music}>
                <MusicPause />
            </button>
        )}
    </div>
  );
}

AudioPlayer.propTypes = {
}

export default AudioPlayer;
