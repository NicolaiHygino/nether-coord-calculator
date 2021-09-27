import React, { useState} from 'react';
import InputSection from './InputSection';

const toNether = (overworldValue) => {
  return overworldValue / 8;
};

const toOverworld = (netherValue) => {
  return netherValue * 8;
};

const tryConvert = (value, converter) => {
  const output = Math.floor(converter(value));
  return output;
};

const Calculator = () => {
  const [x, setX] = useState({value:'', world:''});
  const [y, setY] = useState('');
  const [z, setZ] = useState({value:'', world:''});

  const clearStateClick = () => {
    setX({value:'', world:''});
    setY('');
    setZ({value:'', world:''});
  };

  const handleInputChange = (value, world, name) => {
    switch(name) {
      case 'x':
        setX({value:value, world:world});
        break;
      case 'y':
        setY(value);
        break;
      case 'z':
        setZ({value:value, world:world});
        break;
      default:
        throw new Error(`${name} does not exist`);
    }
  };

  const xOver = x.world === 'nether' 
    ? tryConvert(x.value, toOverworld)
    : x.value;
  const xNeth = x.world === 'overworld' 
    ? tryConvert(x.value, toNether)
    : x.value;

  const zOver = z.world === 'nether' 
    ? tryConvert(z.value, toOverworld)
    : z.value;
  const zNeth = z.world === 'overworld'
    ? tryConvert(z.value, toNether)
    : z.value;

  return(
    <section className="Calculator">
      <InputSection
        world="overworld"
        x={xOver}
        y={y}
        z={zOver}
        onInputChange={handleInputChange}
      />
      <InputSection
        world="nether"
        x={xNeth}
        y={y}
        z={zNeth}
        onInputChange={handleInputChange}
      />
      <button 
        className="button" 
        onClick={clearStateClick}
      >
        Clear
      </button>
    </section>
  );
};

export {toNether, toOverworld, tryConvert};
export default Calculator;
