import PropTypes from 'prop-types';

export const PageHeading = ({ text }) => {
    return <h1>{text}</h1>
};

PageHeading.propTypes = {
    text: PropTypes.string,
}