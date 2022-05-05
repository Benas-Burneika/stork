import PropTypes from "prop-types";

const Navigator = ({ handleOnNextClick, handleOnBackClick }) => {
    return (
        <div>
            <h1>Veikia</h1>
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