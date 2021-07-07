import React, { useState} from 'react';
import InputSection from './components/InputSection';

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

function App() {
  const [x, setX] = useState({value:'', world:''});
  const [y, setY] = useState({value:'', world:''});
  const [z, setZ] = useState({value:'', world:''});
  
  function clearStateClick(){
    setX({value:'', world:''});
    setY({value:'', world:''});
    setZ({value:'', world:''});
  }

  function handleInputChange(value, world, name) {
    switch(name) {
      case 'x':
        setX({value:value, world:world});
        break;
      case 'y':
        setY({value:value, world:world});
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

  const yOver = y.world === 'nether' ? 
    tryConvert(y.value, toOverworld) : y.value;
  const yNeth = y.world === 'overworld' ? 
    tryConvert(y.value, toNether) : y.value;

  const zOver = z.world === 'nether' ? 
    tryConvert(z.value, toOverworld) : z.value;
  const zNeth = z.world === 'overworld' ? 
    tryConvert(z.value, toNether) : z.value;

  return(
    <section className="App">
      <InputSection
        world="overworld"
        x={xOver}
        y={yOver}
        z={zOver}
        onInputChange={handleInputChange}
      />
      <InputSection
        world="nether"
        x={xNeth}
        y={yNeth}
        z={zNeth}
        onInputChange={handleInputChange}
      />
      <button onClick={clearStateClick}>Clear</button>
    </section>
  );
}

export default App;
