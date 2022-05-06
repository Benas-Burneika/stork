import { css } from "@emotion/css";
import PropTypes from "prop-types";

const Navigator = ({ handleOnNextClick, handleOnBackClick }) => {
    const navigator = css`
        width: 200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    `;

    const back = css`
        width: 0;
        height: 0;
        border-top: 25px solid transparent;
        border-right: 50px solid #FFF;
        border-bottom: 25px solid transparent;
        border-left: none;
        background: none;
        padding: 0;
        cursor: pointer;
        outline: inherit;
    `;

    const next = css`
        width: 0;
        height: 0;
        border-top: 25px solid transparent;
        border-left: 50px solid #FFF;
        border-bottom: 25px solid transparent;
        border-right: none;
        background: none;
        padding: 0;
        cursor: pointer;
        outline: inherit;
    `;

    const info = css`
        height: 50px;
        width: 50px;
        background-color: #FFF;
        border-radius: 50%;
        padding: 0;
        cursor: pointer;
        outline: inherit;
        border: none;
        font-size: 24px;
        color: #797D62;
    `;

    return (
        <div className={navigator}>
            <button className={back} onClick={handleOnBackClick} />
            <button className={info}>?</button>
            <button className={next} onClick={handleOnNextClick} />
        </div>
    )
}

Navigator.propTypes = {
    handleOnNextClick: PropTypes.func.isRequired,
    handleOnBackClick: PropTypes.func.isRequired,
}

export default Navigator;
