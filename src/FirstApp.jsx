import PropTypes from 'prop-types';


const FirstApp = ( {title, subtitle} ) => {

   return (
    <>
        <h1 data-testid="test-title">{ title }</h1>
        <p>{ subtitle }</p>
    </>
    );
}

FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string
}

FirstApp.defaultProps = {
    // title: 'There is no title',
    subtitle: 'There is no subtitle'
}

export default FirstApp;