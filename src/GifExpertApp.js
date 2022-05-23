import React, { useState } from 'react';
import { CategoryAdd } from './components/CategoryAdd';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    return (
        <>
            <h2>Gif Expert App</h2>
            <CategoryAdd setCategories={ setCategories } />
            <hr />

            {/* <button type="button" onClick={ handleAdd }>Agregar</button> */}
            <div>
                {
                    categories.map(c => (
                        <GifGrid key={ c } category={ c } />
                    ))
                }
            </div>
        </>
    );
};

export default GifExpertApp;