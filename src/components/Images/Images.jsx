import React from 'react';
import data from "../../data"
import Image from "./image.js";

function Images(props) {
  var renderImages = () => {
    return data.map((currentImage, index) => <Image {...currentImage} incrementScore={props.incrementScore} key={index}/>)
  }

  return(
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center"
    }}>
      {renderImages()}
    </div>
  )
}

export default Images;