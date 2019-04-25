import React from 'react';
import Header from "./components/Header/Header"
import Images from "./components/Images/Images"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      score: 0,
      topScore: 0,
      guessResult: "Click an image to begin!",
      selectedImages: []
    }
    this.incrementScore = this.incrementScore.bind(this);
  }
  
  incrementScore(id) {
    var {score, topScore, guessResult, selectedImages} = this.state;
    
    if (!selectedImages.includes(id)) {
      guessResult = "You guessed correctly!"
      selectedImages.push(id);
      score++;
      
      if (score > topScore) topScore++;
    } else {
      score = 0;
      guessResult = "You guessed incorrectly!"
      selectedImages = [];
    }
    this.setState({score, topScore, guessResult, selectedImages})
  }
  
  render() {
    var {score, topScore, guessResult} = this.state;
    return(
      <div>
        <Header 
          score={score}
          topScore={topScore}
          guessResult={guessResult}
        />
        <Images incrementScore={this.incrementScore}/>
      </div>
    ) 
  }
}



export default App;
