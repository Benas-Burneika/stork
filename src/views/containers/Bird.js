import PropTypes from "prop-types";
import { useState } from "react";
import { css } from "@emotion/css";
import Modal from "react-modal";

// Components
import Navigator from "../components/Navigator";
import BirdCanvas from "../components/BirdCanvas";
import BurgerMenu from "../components/BurgerMenu";
import AudioPlayer from "../components/AudioPlayer";

// Helpers
import { backgroundArray, birdArray, birdNames, mainColorArray, customModalStyles, btn_animation } from "../../config";
import Logo from '../../assets/btn-logo-white.svg';
import Burger from '../../assets/btn-burger.svg';
import Pop from '../../assets/sfx/pop.mp3';

const Bird = () => {
    const [birdIndex, setBird] = useState(0);
    const [mainColor, setColor] = useState(mainColorArray[birdIndex]);
    const [showModal, setModal] = useState(false);
    const [showModalBurger, setModalBurger] = useState(false);
    const [background, setBackground] = useState(backgroundArray[birdIndex]);
    let currentBird = birdArray[birdIndex];
    let pop = new Audio(Pop)

    function handleOpenModal () {
        setModal(true);
    } 

    function handleCloseModal () {
        setModal(false);
    } 

    function handleOpenModalBurger () {
        setModalBurger(true);
    } 

    function handleCloseModalBurger () {
        setModalBurger(false);
    } 

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

    const playPop = () => {
        pop.volume = 0.3;
        pop.play()
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

    const logo = css`
        display: flex;
        align-items: center;

        img {
            transform: scale(0.5);
            filter: brightness(0) invert(1);
        }
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

    const burger = css`
        background-color: transparent;
        border: none;
        cursor: pointer;
        outline: inherit;
        border: none;
        font-size: 24px;
        color: ${mainColor};
        ${btn_animation};
    `;

    return (
        <div className={container}>
            <header className={header}>
                <div className={logo}>
                    <img src={Logo} alt="Logo" />
                    <h1>Gandras</h1>
                </div>
                <button className={burger} onClick={() => {
                    handleOpenModalBurger(); 
                    playPop();
                }}>
                    <img src={Burger} alt="Burger" />
                </button>
                <Modal isOpen={showModalBurger} onRequestClose={handleCloseModalBurger} contentLabel="Burger Modal" style={customModalStyles}>
                    <BurgerMenu mainColor={mainColor} handleCloseModalBurger={handleCloseModalBurger}/>
                </Modal>
            </header>
            <main className={ mainContent }>
                {/* <h1>△△△△△△△△△△△△△</h1> */}
                <BirdCanvas currentBird={ currentBird } handleOpenModal={ handleOpenModal } playPop={ playPop } />
                <h1>{birdNames[birdIndex]}</h1>
                <Navigator 
                    handleOnBackClick={ handleOnBackClick }
                    handleOnNextClick={ handleOnNextClick }
                    handleOpenModal={ handleOpenModal }
                    handleCloseModal={ handleCloseModal }
                    mainColor={mainColor}
                    showModal={showModal}
                    currentBird={ currentBird }
                    currentBirdName={ birdNames[birdIndex] }
                    playPop={ playPop }
                />
                <div className={music}>
                    <AudioPlayer />
                </div>
            </main>
        </div>
    )
}

Bird.propTypes = {
    vardas: PropTypes.string,
}

export default Bird;