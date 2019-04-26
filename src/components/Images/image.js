import React from 'react';

function Image(props) {

  const clickButton = () => {
    props.incrementScore(props.id)
  }

  return(
    <button onClick={clickButton}style={{
      width: "170px",
      height: "170px",
      margin: "8px 25px",
      backgroundImage: `url(${props.name})`,
      backgroundSize: "170px 170px"
    }}>
    </button>
  ) 
}

export default Image;