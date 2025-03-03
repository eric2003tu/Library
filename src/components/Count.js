import React, { useState} from 'react';
import '../styles/Count.css';
function Count(){
  const [num,setNum] = useState(0);
  return(
    <div id='countDiv'>
    <h1>you cliked {num} times</h1>
    <button id='countBtn' onClick={function(){
      setNum(num+1)
    }}>Count</button>
    </div>
  );
}
export default Count;