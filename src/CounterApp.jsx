import PropTypes from 'prop-types';
import React from 'react';


function CounterApp({value}) {    
    
    const handleAdd = () => {
        console.log('+1');
    }
    
    return (
    <>
        <h1>CounterApp</h1>
        <h2> { value } </h2>

        <button onClick={ handleAdd }>
            +1
        </button>
    </>
    );    
}

CounterApp.PropTypes = {
    value: PropTypes.number.isRequired
}
CounterApp.defaultProps = {
    value: 0
}

export default CounterApp;