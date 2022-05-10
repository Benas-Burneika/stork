import { css } from "@emotion/css";
import PropTypes from "prop-types";

// Assets
import {ReactComponent as Active} from '../../assets/btn-triangle-up.svg';
import {ReactComponent as Passive} from '../../assets/btn-triangle-down.svg';

// Helpers
import { btn_animation, birdArray } from "../../config";

function Breadcrumb({birdIndex, handleOnCrumbClick, playPop}) {
    const triangles = [];
    
    const container = css`
        display: flex;
        width: 100%;
        justify-content: space-evenly;
    `;
    
    const btn_passive = css`
        cursor: pointer;
        ${btn_animation};
    `;
    
    for (let i = 0; i < birdArray.length; i++) {
        if (i === birdIndex) {
            triangles.push(<Active fill="#5E5E5E" key={i} />);
            continue; 
        }
        triangles.push(
            <Passive 
                onClick={() => {
                    handleOnCrumbClick(i);
                    playPop();
                }} 
                className={btn_passive}
                key={i}
            />
        );
    }

  return (
    <div className={container}>
        {triangles}
    </div>
  );
}

Breadcrumb.propTypes = {
    birdIndex: PropTypes.number.isRequired,
    handleOnCrumbClick: PropTypes.func.isRequired,
    playPop: PropTypes.func.isRequired,
}

export default Breadcrumb;
