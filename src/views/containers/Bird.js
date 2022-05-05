import PropTypes from "prop-types";
import { useState } from "react";

// Components
import Navigator from "../components/Navigator";

const Bird = () => {
    const birdArray = ['Gandras', 'Varna', 'Zyle'];
    const [birdIndex, setBird] = useState(0);
    let currentBird = birdArray[birdIndex];

    function handleOnNextClick() {
        if (birdIndex !== birdArray.length - 1) {
            setBird(birdIndex + 1);
            return currentBird = birdArray[birdIndex];
        }
        setBird(0);
        return currentBird = birdArray[birdIndex];
    }

    function handleOnBackClick() {
        if (birdIndex !== 0) {
            setBird(birdIndex - 1);
            return currentBird = birdArray[birdIndex];
        }
        setBird(birdArray.length - 1);
        return currentBird = birdArray[birdIndex];
    }

    return (
        <div>
            <header>
                <h1>{currentBird}</h1>
                {/* <BurgerMenu /> */}
            </header>
            {/* <Breadcrumb />
            <PaukscioCanvas /> */}
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