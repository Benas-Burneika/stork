import { css } from "@emotion/css";
import PropTypes from "prop-types";

// Assets
import {ReactComponent as Logo} from '../../assets/btn-logo.svg';
import {ReactComponent as Close} from '../../assets/btn-close.svg';

// Components 
import Erelis from "./Erelis";
import Gandras from "./Gandras";
import Gulbe from "./Gulbe";
import Kalakutas from "./Kalakutas";
import Kekstas from "./Kekstas";
import Peleda from "./Peleda";
import Tulzys from "./Tulzys";
import Varna from "./Varna";
import Sniegena from "./Sniegena";

// Helpers
import { btn_animation } from "../../config";

function ModalInfo({currentBird, handleCloseModal, currentBirdName, mainColor}) {
    let SelectedBird;

    switch (currentBird) {
        case "gandras":
            SelectedBird = Gandras;
            break;
        case "erelis":
            SelectedBird = Erelis;
            break;
        case "gulbe":
            SelectedBird = Gulbe;
            break;
        case "kalakutas":
            SelectedBird = Kalakutas;
            break;
        case "kekstas":
            SelectedBird = Kekstas;
            break;
        case "peleda":
            SelectedBird = Peleda;
            break;
        case "tulzys":
            SelectedBird = Tulzys;
            break;
        case "varna":
            SelectedBird = Varna;
            break;
        case "sniegena":
            SelectedBird = Sniegena;
            break;
        default:
            break;
        }

    const container = css`
      display: flex;
      flex-direction: column;
    `;

    const modalClose = css`
      display: flex;
      justify-content: end;
  `;

    const closeBtn = css`
    border: none;
    background: none;
    padding: 0;
    cursor: pointer;
    outline: inherit;
    ${btn_animation};
  `;

  const modalLogoContainer = css`
    display: flex;
    justify-content: center;
    margin: 50px 0 20px 0;
  `;

  const modalInfo = css``;

  return (
    <div className={container}>
        <div className={modalClose}>
            <button className={closeBtn} onClick={handleCloseModal}>
                <Close stroke={mainColor} />
            </button>
        </div>
        <div className={modalLogoContainer}>
            <Logo stroke={mainColor} />
        </div>
        <div className={modalInfo}>
            <h2 className={css`text-align: center; margin: 20px 0 50px 0; color: ${mainColor}`}>{currentBirdName.toUpperCase()}</h2>
            <SelectedBird mainColor={mainColor} />
        </div>
      
    </div>
  );
}

ModalInfo.propTypes = {
    currentBird: PropTypes.string.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    currentBirdName: PropTypes.string,
    mainColor: PropTypes.string.isRequired
}

export default ModalInfo;
