import PropTypes from "prop-types";
import { useState } from "react";
import { css } from "@emotion/css";

// Components
import Navigator from "../components/Navigator";
import BirdCanvas from "../components/BirdCanvas";

// Helpers
import { backgroundArray, birdArray, birdNames, mainColorArray } from "../../config";

const Bird = () => {
    const [birdIndex, setBird] = useState(0);
    const [mainColor, setColor] = useState(mainColorArray[birdIndex]);
    const [background, setBackground] = useState(backgroundArray[birdIndex]);
    let currentBird = birdArray[birdIndex];

    function handleOnNextClick() {
        if (birdIndex !== birdArray.length - 1) {
            setBird(birdIndex + 1);
            setStyle(birdIndex + 1);
            return currentBird = birdArray[birdIndex];
        }
        setBird(0);
        setStyle(0);
        return currentBird = birdArray[birdIndex];
    }

    function handleOnBackClick() {
        if (birdIndex !== 0) {
            setBird(birdIndex - 1);
            setStyle(birdIndex - 1);
            return currentBird = birdArray[birdIndex];
        }
        setBird(birdArray.length - 1);
        setStyle(birdArray.length - 1);
        return currentBird = birdArray[birdIndex];
    }

    const setStyle = (index) => {
        setColor(mainColorArray[index]);
        setBackground(backgroundArray[index]);
    }

    const container = css`
        display: flex;
        flex-direction: column;
        background: ${background};
        min-height: 100vh;
    `;

    const header = css`
        display: flex;
        justify-content: space-between;
        margin: 10px;
    `;

    const mainContent = css`
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        justify-content: space-around;
        margin: 10px;
    `;

    const music = css`
        display: flex;
        justify-content: end;
        width: 100%;
    `;

    return (
        <div className={container}>
            <header className={header}>
                <h1>Gandras</h1>
                <h1>=</h1>
            </header>
            <main className={ mainContent }>
                {/* <h1>△△△△△△△△△△△△△</h1> */}
                <BirdCanvas currentBird={ currentBird } />
                <h1>{birdNames[birdIndex]}</h1>
                <Navigator 
                    handleOnBackClick={ handleOnBackClick }
                    handleOnNextClick={ handleOnNextClick }
                    mainColor={mainColor}
                />
                <div className={music}>
                    <h1>♫</h1>
                </div>
            </main>
        </div>
    )
}

Bird.propTypes = {
    vardas: PropTypes.string,
}

export default Bird;