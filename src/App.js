import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Score from "./components/Score"
import friends from "./friends.json";
import "./App.css";


class App extends Component {

 state = {

      friends: friends,
      score: 0,
      correct:0, 
    

    };


  // lifestyle here
  handleIncrement = (id) => {
    console.log(friends[id], friends[id].value)
    if (friends[id].value===true){
      this.setState({score: this.state.score + 1})
      this.setState({ count: this.state.count + 1 });
      this.setState({ correct: this.state.correct + 1 });
     friends[id].value=false
    }
    else if (friends[id].value===false){
      console.log(friends[id].value)
      this.setState({score: this.state.score + 1})
      this.setState({ count: this.state.count + 1 });
      
    }
    else if(this.state.count===12) {
    this.setState({
      friends: friends,
      count: 0,
      correct: 0,
     
    })
    }
  };

  
shuffleCards = () =>{

 const friends = this.state.friends.map(a =>
      [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
 
  this.setState({ friends });

};


  render() {
    return (
      <div>
        <Title>Black Panther 
          <Score>
          <div>Score:{this.state.score}</div>
          <div>Correct:{this.state.correct}</div>
          <div>Start by clicking on an image below. The object of the game is not to click the same image twice. Good Luck!!</div>
          </Score>
        </Title>
    <Wrapper>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            image={friend.image}
            handleIncrement={this.handleIncrement}
            isClicked={false}
            shuffleCards={this.shuffleCards}
          />
        ))}
      </Wrapper>
    </div>
    );
  }
}

export default App;
