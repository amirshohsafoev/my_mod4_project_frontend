import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import WordsContainer from "./Containers/WordsContainer";
import UpdateForm from "./Components/UpdateForm";
import MustLearnWordsContainer from "./Containers/MustLearnWordsContainer";
class App extends Component {
  state = {
    words: [],
    mustLearn: []
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
    console.log(word);
    let newArr = [word, ...this.state.words];
    fetch("http://localhost:3000/words", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        headword: word.headword,
        definition: word.definition,
        example: word.example
      })
    });
    this.setState({
      words: newArr
    });
  };

  handleSelect(word) {
    let newArr = [word, ...this.state.mustLearn];
    this.setState({
      mustLearn: newArr
    });
  }

  render() {
    // console.log(this.state.mustLearn);
    return (
      <div>
        <UpdateForm parentSubmit={this.submitHandler} />
        <WordsContainer
          words={this.state.words}
          handleSelect={this.handleSelect}
        />
        <MustLearnWordsContainer mustLearnList={this.state.mustLearn} />
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
