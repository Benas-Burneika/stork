import PropTypes from "prop-types";

const Navigator = ({ handleOnNextClick, handleOnBackClick }) => {
    return (
        <div>
            <button onClick={handleOnBackClick}>Back</button>
            <button onClick={handleOnNextClick}>Next</button>
        </div>
    )
}

Navigator.propTypes = {
    handleOnNextClick: PropTypes.func.isRequired,
    handleOnBackClick: PropTypes.func.isRequired,
}

export default Navigator;
