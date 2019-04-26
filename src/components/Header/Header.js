import React from 'react';

const Header = (props) => {
  const {score, topScore, guessResult} = props;
  return(
    <div>
      <nav className="navbar navbar-dark" style={{backgroundColor: "#1f1f2e", color: "white"}}>
        <p>Clicky Game</p>
        <p style={{textAlign: "center", marginLeft: "50px"}}>{guessResult}</p>
        <p>Score: {score} | Top Score: {topScore}</p>
      </nav>
      <div className="jumbotron jumbotron-fluid" style={{background: "#c2c2d6"}}>
        <div className="container" style={{textAlign: "center"}}>
          <h1 className="display-4">Clicky Game!</h1>
          <p className="lead">Click on an image to earn points, but don't click on any more than once!</p>
        </div>
      </div>
    </div>
  )
}

export default Header;