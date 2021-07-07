function InputSection(props) {
  const world = props.world;
  
  function handleInputChange(e) {
    const value = e.target.value;
    const name = e.target.name;
    props.onInputChange(value, world, name);
  }

  return (
    <div>
      <h2>{world}</h2>
      <label htmlFor={"x-" + world}>X</label>
      <input
        type="tel"
        id={"x-" + world}
        name="x"
        value={props.x}
        onChange={handleInputChange}
       />
      <label htmlFor={"y-" + world}>Y</label>
      <input
        type="tel"
        id={"y-" + world}
        name="y"
        value={props.y}
        onChange={handleInputChange}
      />
      <label htmlFor={"z-" + world}>Z</label>
      <input
        type="tel"
        id={"z-" + world}
        name="z"
        value={props.z}
        onChange={handleInputChange}
      />
    </div>
  );
}

export default InputSection;
