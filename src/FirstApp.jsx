import PropTypes from 'prop-types';


const FirstApp = ( {title, subtitle} ) => {

   return (
    <>
        <h1>{ title }</h1>
        <p>{ subtitle }</p>
    </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

export default FirstApp;