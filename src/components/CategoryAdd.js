import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const CategoryAdd = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }; // handleInputChange

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita que se refresque la pantalla
        
        if (inputValue.trim().length > 2)
        {
            setCategories(c => [inputValue, ...c]);
            setInputValue('');
        }
    }; // handleSubmit

    return (
        <form onSubmit={ handleSubmit } className="card blur shadow-lg">
            <div className='card-body'>
            <input className='form-control mb-2' type="text" value={ inputValue } onChange={ handleInputChange } />
            {/* <Button variant="primary">Aceptar</Button> */}
            </div>
        </form>
    )
}; // CategoryAdd

CategoryAdd.prototype = {
    setCategories: PropTypes.func.isRequired // solo decir que es una funcion lo que debe de recibir
};

