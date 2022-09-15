import React, {useState} from 'react';

const Btn = () =>{

const [randomNumber, setRandomNumber] = useState(0);

function NumberAlea(menor, maior){
  setRandomNumber(Math.floor(Math.random() * (maior - menor)))
}

  return(
    <>
      <h1>{randomNumber}</h1>
      <button onClick={() => NumberAlea(1, 9)}>Clique aqui</button>
    </>
  )
}

export default Btn;