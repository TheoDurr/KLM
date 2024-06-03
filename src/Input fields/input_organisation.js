// src/InputField.js
import React, { useState } from 'react';

const InputOrganisation = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <div>
            <label htmlFor="input">Enter something:</label>
            <input
                type="text"
                id="input"
                value={inputValue}
                onChange={handleChange}
            />
            <p>You entered: {inputValue}</p>
        </div>
    );
};

export default InputOrganisation;