import PropTypes from "prop-types";
import { useState } from "react";
import { css } from "@emotion/css";

// Components
import Navigator from "../components/Navigator";
import BirdCanvas from "../components/BirdCanvas";

// Helpers
import { backgroundArray, birdArray, birdNames } from "../../config";

const Bird = () => {
    const [birdIndex, setBird] = useState(0);
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
        setBackground(backgroundArray[index]);
    }

    const bird = css`
        background-color: ${background};
        min-height: 100vh;
    `;

    const birdName = css`
        display: flex;
        justify-content: center;
        margin: 20px 0;
    `;

    return (
        <div className={bird}>
            <header className="header">
                <h1 className="logo">Gandras</h1>
                <div>Burgeris</div>
                {/* <BurgerMenu /> */}
            </header>
            <BirdCanvas currentBird={ currentBird } />
            <div className={ birdName }>
                {/* <Breadcrumb /> */}
                <h1>{birdNames[birdIndex]}</h1>

            </div>
            <Navigator 
                handleOnBackClick={ handleOnBackClick }
                handleOnNextClick={ handleOnNextClick }
            />
        </div>
    )
}

Bird.propTypes = {
    vardas: PropTypes.string,
}

export default Bird;