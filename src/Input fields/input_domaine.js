// src/InputField.js
import React, { useState } from 'react';

const InputDomaine = () => {
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
            <select>
                <option value="value1">Mairie de Badevel</option>
            </select>
            <br/>
            <select>
                <option value="value1">Identification maladies plantes</option>
                <option value="value1">Patients agés</option>
                <option value="value1">Maison inclusive</option>
            </select>
            <br/>
            <button>Créer</button>
        </div>
    );
};

export default InputDomaine;