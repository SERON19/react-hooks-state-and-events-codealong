import react,{useState}from "react";

function Toggle() {
  const[isOn, SetisOn] =useState(true)

  function handleClick(){
    setIsOn((isOn) => !isOn)
    console.log(isOn)

  }
  const color = isOn ? "red" : "white";

return (

<button style= {{background: color}} onClick={handleClick}>{isOn ? "ON" : "OFF"}</button>
);

}

export default Toggle;
