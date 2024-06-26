// src/InputField.js
import React, { useState } from 'react';

const InputOrganisation = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <label htmlFor="input">Nom : </label>
            <input
                type="text"
                id="input"
                value={inputValue}
                onChange={handleChange}
            />
            <br/>
            <button>Créer</button>
        </div>
    );
};

export default InputOrganisation;