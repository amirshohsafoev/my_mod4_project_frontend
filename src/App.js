import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import WordsContainer from "./Containers/WordsContainer";
import UpdateForm from "./Components/Form";

class App extends Component {
  state = {
    words: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/words")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          words: data
        })
      );
  }

  submitHandler = word => {
    let newArr = [word, ...this.state.words];
    this.setState({
      words: newArr
    });
  };

  render() {
    return (
      <div>
        <UpdateForm parentSubmit={this.submitHandler} />
        <WordsContainer words={this.state.words} />
      </div>
    );
  }
}

export default App;

// <div className="App">
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//       className="App-link"
//       href="https://reactjs.org"
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
