import React from 'react';

function InputSection({ world, x, y, z, onInputChange }) {  
  function handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    onInputChange(value, world, name);
  }

  return (
    <div className="input-wrapper">
      <h2>{world}</h2>
      <div className="input-fields">
        <p>
          <label htmlFor={"x-" + world}>X</label>
          <input
            type="tel"
            id={"x-" + world}
            name="x"
            value={x}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor={"y-" + world}>Y</label>
          <input
            type="tel"
            id={"y-" + world}
            name="y"
            value={y}
            onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor={"z-" + world}>Z</label>
          <input
            type="tel"
            id={"z-" + world}
            name="z"
            value={z}
            onChange={handleInputChange}
          />
        </p>
      </div>
    </div>
  );
}

export default InputSection;
