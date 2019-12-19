import React from 'react';
// import logo from './logo.svg';
import './App.css';

// importing Components for use on main page
import doggos from "./doggos.json";
import Wrapper from "./components/Wrapper"
import Header from "./components/Header";
import Instructions from "./components/Instructions";
import Score from "./components/Score";
import DogCard from "./components/DogCard";

class App extends React.Component {

  state = {
    doggosState: doggos,
    // counter: 0,
    score: 0,
    highScore: 0,
    clickedDogs: []
  } 

  whenPet = id => {

    // ?????!!!!!
    const { score } = this.state;
    // const { counter } = this.state;

    console.log(`\n--- ID Clicked: ${id} ---`);

    // check if id is inside of clickedDogs array
    if (this.state.clickedDogs.includes(id)) {
      // if ID is in array... 
      console.log(`GAME OVER\nALREADY in array: ${this.state.clickedDogs}`);

      // 1 - reset current state of _____ to 0

      // 2 - run shuffle function

    } else {
      // if ID is not in array... 

      // 1 - add it to the clickedDogs array 
      this.state.clickedDogs.push(id);
      console.log(`ADDED to array: ${this.state.clickedDogs}`);

      // 2 - and increase the score using setState
      // let scoreTracker use the value of const score to add to score
      let scoreTracker = score + 1;
      // set the value of the score property to the value of the scoreTracker
      this.setState({ score: scoreTracker });

      console.log(`\nscoreTracker: ${scoreTracker}`);
      // console.log(`score: ${score}`);
      // console.log(`this.state.score: ${this.state.score}`);
    }

  }

  render() {
    // console.log(doggos);
    return (
      <Wrapper>

        <Header />

        <div className="row">
          <Instructions />
          <Score highScore={this.state.highScore} score={this.state.score} />
        </div>

        <div className="container">
          <div className="row">
            {this.state.doggosState.map(doggo => (
              <DogCard onClick={() => this.whenPet(doggo.id)} image={doggo.imageUrl} id={doggo.id} key={doggo.id} name={doggo.name} insta={doggo.insta.handle} />

            ))}
          </div>
        </div>

        {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      </Wrapper>
    );
  }
}

export default App;
