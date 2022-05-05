import PropTypes from "prop-types";

const Bird = ({vardas}) => {
    return (
        <h1>{vardas}</h1>
    )
}

Bird.propTypes = {
    vardas: PropTypes.string,
}

export default Bird;