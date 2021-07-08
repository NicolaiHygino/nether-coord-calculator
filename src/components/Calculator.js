import React, { useState} from 'react';
import InputSection from './InputSection';

function toNether(overworldValue) {
  return overworldValue / 8;
}

function toOverworld(netherValue) {
  return netherValue * 8;
}

function tryConvert(value, converter) {
  const output = Math.floor(converter(value));
  return output;
}

function Calculator() {
  const [x, setX] = useState({value:'', world:''});
  const [y, setY] = useState('');
  const [z, setZ] = useState({value:'', world:''});

  function clearStateClick(){
    setX({value:'', world:''});
    setY('');
    setZ({value:'', world:''});
  }

  function handleInputChange(value, world, name) {
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
    }
  }
  
  const xOver = x.world === 'nether' ?
    tryConvert(x.value, toOverworld) : x.value;
  const xNeth = x.world === 'overworld' ?
    tryConvert(x.value, toNether) : x.value;

  const zOver = z.world === 'nether' ? 
    tryConvert(z.value, toOverworld) : z.value;
  const zNeth = z.world === 'overworld' ? 
    tryConvert(z.value, toNether) : z.value;

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
}

export default Calculator;
