import { useState } from "react";
import { css } from "@emotion/css";
import PropTypes from "prop-types";

// Assets
import {ReactComponent as Logo} from '../../assets/btn-logo.svg';
import {ReactComponent as Close} from '../../assets/btn-close.svg';

// Helpers
import { btn_animation } from "../../config";

// Containers
import BurgerContent from "../containers/BurgerContent";
import ApieProjekta from "../containers/ApieProjekta";

function BurgerMenu({handleCloseModalBurger, mainColor}) {
  const [currentView, setCurrentView] = useState("BurgerContent");

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
    ${btn_animation}
  `;

  const modalLogoContainer = css`
    display: flex;
    justify-content: center;
    margin: 50px 0 20px 0;
  `;

  return (
    <div className={container}>
        <div className={modalClose}>
            <button className={closeBtn} onClick={handleCloseModalBurger}>
                <Close stroke={mainColor} />
            </button>
        </div>
        <div className={modalLogoContainer}>
            <Logo stroke={mainColor} />
        </div>
        {
          currentView === "Apie" ?
            <ApieProjekta />
          :
            <BurgerContent setCurrentView={setCurrentView} mainColor={mainColor} />
        }
    </div>
  );
}

BurgerMenu.propTypes = {
    handleCloseModalBurger: PropTypes.func.isRequired,
    mainColor: PropTypes.string.isRequired
}

export default BurgerMenu;
