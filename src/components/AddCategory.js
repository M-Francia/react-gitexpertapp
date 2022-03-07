import React, { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => { 
    
    const [inputValue, setinputValue] = useState(''); //

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
    
        e.preventDefault(); //Para que no reviente

        if( inputValue.trim().length > 2 ){
            setCategories( categories => [inputValue, ...categories] );
            setinputValue('');
        }

    }

    return(
        <form onSubmit={handleSubmit}>
        <h1>{inputValue}</h1>
        <p>{inputValue}</p>
        <input
            type="text"
            value={inputValue}
            onChange={ handleInputChange }
        />
        </form>
    )

 }

 AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}