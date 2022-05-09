import PropTypes from "prop-types";
import { css } from "@emotion/css";
import { ReactComponent as Erelis } from "../../assets/erelis.svg";
import { ReactComponent as Gandras } from "../../assets/gandras.svg";
import { ReactComponent as Gulbe } from "../../assets/gulbe.svg";
import { ReactComponent as Kalakutas } from "../../assets/kalakutas.svg";
import { ReactComponent as Kekstas } from "../../assets/kekstas.svg";
import { ReactComponent as Peleda } from "../../assets/peleda.svg";
import { ReactComponent as Tulzys } from "../../assets/tulzys.svg";
import { ReactComponent as Varna } from "../../assets/varna.svg";
import { ReactComponent as Zyle } from "../../assets/zyle.svg";
function BirdCanvas({ currentBird, handleOpenModal, playPop }) {
  const components = {
    gandras: Gandras,
    erelis: Erelis,
    gulbe: Gulbe,
    kalakutas: Kalakutas,
    kekstas: Kekstas,
    peleda: Peleda,
    tulzys: Tulzys,
    varna: Varna,
    zyle: Zyle,
  }

  let SelectedBird;

  switch (currentBird) {
    case "gandras":
      SelectedBird = components[currentBird];
      break;
    case "erelis":
      SelectedBird = components[currentBird];
      break;
    case "gulbe":
      SelectedBird = components[currentBird];
      break;
    case "kalakutas":
      SelectedBird = components[currentBird];
      break;
    case "kekstas":
      SelectedBird = components[currentBird];
      break;
    case "peleda":
      SelectedBird = components[currentBird];
      break;
    case "tulzys":
      SelectedBird = components[currentBird];
      break;
    case "varna":
      SelectedBird = components[currentBird];
      break;
    case "zyle":
      SelectedBird = components[currentBird];
      break;
    default:
      break;
  }

const canvas = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const mainImage = css`
  max-height: 70vh;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 60%);
  transition: .2s ease-in-out 0s;
  &:hover {
    transform: scale(0.95);
  }
`;

  return (
    <div className={canvas}>
      {/* <div className={backgroundLight}/> */}
      <SelectedBird className={mainImage} onClick={() => {
        handleOpenModal();
        playPop();
      }}/>
    </div>
  );
}

BirdCanvas.propTypes = {
  currentBird: PropTypes.string.isRequired,
  handleOpenModal: PropTypes.func.isRequired,
  playPop: PropTypes.func.isRequired,
}

export default BirdCanvas;
