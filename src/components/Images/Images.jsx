import React from 'react';
import data from "../../data"
import Image from "./image.js";

function Images(props) {
  var renderImages = () => {
    return data
    .map((currentImage, index) => <Image {...currentImage} incrementScore={props.incrementScore} key={index}/>)
    .sort(() => .5 - Math.random())
  }

  return(
    <div style={{
        width: "100%",
        backgroundColor: "#1f1f2e",
        height: "100%"
      }}>
      <div id="shake" style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "1000px",
        margin: "auto",
        backgroundColor: "#1f1f2e"
      }}>
        {renderImages()}
      </div>
    </div>

  )
}

export default Images;