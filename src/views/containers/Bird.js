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
import Logo from '../../assets/main-logo.svg';
import Burger from '../../assets/btn-burger.svg';
import Pop from '../../assets/sfx/pop.mp3';
import Breadcrumb from "../components/Breadcrumb";

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

    function handleOnCrumbClick(index) {
        setBird(index);
        setStyle(index);
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

    const mainContent = css`
        display: flex;
        flex-direction: column;
        flex: 1;
        align-items: center;
        justify-content: space-between;
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

    const birdNameHeading = css`
        margin: 20px 0;
    `;

    return (
        <div className={container}>
            <header className={header}>
                <img src={Logo} alt="Logo" className={css`width:200px`} />
                <button className={burger} onClick={() => {
                    handleOpenModalBurger(); 
                    playPop();
                }}>
                    <img src={Burger} alt="Burger" />
                </button>
                <Modal isOpen={showModalBurger} onRequestClose={handleCloseModalBurger} contentLabel="Burger Modal" style={customModalStyles}>
                    <BurgerMenu mainColor={mainColor} handleCloseModalBurger={handleCloseModalBurger} playPop={playPop}/>
                </Modal>
            </header>
            <main className={ mainContent }>
                <BirdCanvas currentBird={ currentBird } handleOpenModal={ handleOpenModal } playPop={playPop} />
                <h1 className={birdNameHeading}>{birdNames[birdIndex]}</h1>
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
                <Breadcrumb birdIndex={birdIndex} handleOnCrumbClick={handleOnCrumbClick} playPop={playPop} />
            </main>
        </div>
    )
}

Bird.propTypes = {
    vardas: PropTypes.string,
}

export default Bird;