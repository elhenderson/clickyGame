import React from 'react';

const Header = (props) => {
  const {score, topScore, guessResult} = props;
  return(
    <div>
      <p>Clicky Game</p>
      <p>{guessResult}</p>
      <p>Score: {score}</p>
      <p>Top Score: {topScore}</p>
    </div>
  )
}

export default Header;