import React from 'react';


class Header extends React.Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      topScore: 0,
      incrementTopScore: true
    }
    this.incrementScore = this.incrementScore.bind(this);
    this.resetScore = this.resetScore.bind(this);
  }

  incrementScore() {
    var {score, topScore, incrementTopScore} = this.state;

    score++;
    if (incrementTopScore) topScore++;
    if (score >= topScore) incrementTopScore = true

    this.setState({score, topScore, incrementTopScore})
  }

  resetScore() {
    var {score, incrementTopScore} = this.state;

    score = 0;
    incrementTopScore = false

    this.setState({score, incrementTopScore})
  }

  render() {
    const {score, topScore} = this.state;
    return(
      <div id="header">
        <p>Clicky Game</p>

        <p>Score: {score}</p>
        <p>Top Score: {topScore}</p>
        <button onClick={this.incrementScore}>Increment</button>
        <button onClick={this.resetScore}>Reset</button>
      </div>
    )
  }
}
// function Header(props) {
//   const [count, setCount] = useState(0)

  

//   return(
//     <div id="header">
//       <p>Clicky game</p>
      
//       <p>Score: {count}</p>
//       <p>Top Score: {count}</p>
//       <button onClick={() => setCount(count + 1)}>
//         Click me!
//       </button>
//       <button onClick={() => setCount(0)}>
//         Reset
//       </button>

//     </div>
//   )
// }


export default Header;