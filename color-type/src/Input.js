import React from 'react';
import colorNames from 'colornames';

function Input({
    colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText
}) {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add color value:</label>
        <input
            autoFocus 
            type="text"
            placeholder='Add color'
            value={colorValue}
            onChange={(e) => {
                setColorValue(e.target.value)
                setHexValue(colorNames(e.target.value))
            }}
        />
        <button
            type='button'
            onClick={() => setIsDarkText(!isDarkText)}
        >
         Toggle Text Color
        </button>
    </form>
  )
}

export default Input