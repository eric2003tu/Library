import React, { useState} from 'react';
import '../styles/Greet.css';
function Greeting(){
  const [name,setName] = useState("");
  const[num,setNum] = useState(0);
  return (
    <div id='greetingDiv'>
  <textarea name='name' id='myname' value={name} placeholder='enter name'  onChange={function(data){
    if(data.target.value.length <= 100000){
    setName(data.target.value)
    setNum(data.target.value.length)
  }
  else{
    alert("You hit the limit");
    data.target.value = "";
  }
  }}></textarea>
  <div id='textDiv'>{name} 
  </div>
  <h2>you have entered {num} characters</h2>
  </div>
  );
}
export default Greeting;