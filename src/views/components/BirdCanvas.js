import PropTypes from "prop-types";
import { css } from "@emotion/css";
import { ReactComponent as Erelis } from "../../assets/erelis.svg";
import { ReactComponent as Gandras } from "../../assets/gandras.svg";


function BirdCanvas({ currentBird }) {
  const components = {
    gandras: Gandras,
    erelis: Erelis,
  }

  let SelectedBird;

  switch (currentBird) {
    case "gandras":
      SelectedBird = components[currentBird];
      break;
    case "erelis":
      SelectedBird = components[currentBird];
      break;
    default:
      break;
  }

const backgroundLight = css`
  background: radial-gradient(circle, rgba(255,255,255,1) -60%, rgba(121,125,98,1) 50%);
  width: 100%;
  height: auto;
  grid-column: 2;
  grid-row: 2;
  @media only screen and (max-width: 900px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

const selectedBird = css`
  grid-column: 2;
  grid-row: 2;
  z-index: 1;
  @media only screen and (max-width: 900px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

// const shadow = css`
//   width: 100%;
//   height: 50px;
//   background: radial-gradient(circle, rgba(32,32,32,1) 23%, rgba(85,85,85,1) 100%);
//   opacity: 50%;
//   border-radius: 50%;
//   grid-column: 2;
//   grid-row: 2;
//   z-index: 0;
//   justify-self: center;
//   align-self: end;
//   @media only screen and (max-width: 900px) {
//     grid-column: 1;
//     grid-row: 1;
//     width: 50%
//   }
// `;

  return (
    <div className="canvas">
      <div className={backgroundLight}/>
      <SelectedBird className={ selectedBird } />
      {/* <div className={shadow} /> */}
    </div>
  );
}

BirdCanvas.propTypes = {
  currentBird: PropTypes.string.isRequired,
}

export default BirdCanvas;
