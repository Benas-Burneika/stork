import { css } from '@emotion/css';
import { PropTypes } from 'prop-types';

// Assets
import {ReactComponent as Triangle } from '../../assets/btn-next.svg';

// Helpers
import { removeBtnStyle } from '../../config';

function BurgerContent({setCurrentView}) {
const contentContainer = css`
    margin: 50px auto;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const containerLines = css`
    display: flex;

    a {
        color: inherit;
        text-decoration: inherit;
        margin-left: 30px;
        font-size: 32px;
    }

    button {
        ${removeBtnStyle};
        font-size: 32px;
        color: inherit;
        margin-left: 30px;
    }
`;

  return (
    <div className={contentContainer}>
        <div className={containerLines}>
            <Triangle />
            <button onClick={() => setCurrentView("Apie")}>Apie Projekta</button>
        </div>
        <div className={containerLines}>
            <Triangle />
            <a href="https://github.com/Benas-Burneika/stork" target="_blank" rel="noopener noreferrer" >Projekto Kodas</a>
        </div>
        <div className={containerLines}>
            <Triangle />
            <a href="https://github.com/rh12503/triangula" target="_blank" rel="noopener noreferrer" >Triangula</a>
        </div>
    </div>
  );
  }
  
BurgerContent.protoTypes = {
    setCurrentView: PropTypes.func.isRequired,
}

  export default BurgerContent;
  