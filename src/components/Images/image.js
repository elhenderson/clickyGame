import React from 'react';

function Image(props) {

  const clickButton = () => {
    props.incrementScore(props.id)
  }

  return(
    <button onClick={clickButton}style={{
      width: "170px",
      height: "170px",
      margin: "8px 25px"
    }}>
      {props.id}
    </button>
  ) 
}

export default Image;