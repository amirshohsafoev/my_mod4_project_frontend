import React, { Component } from "react";
import { Alert, FormGroup, Label, Input } from "reactstrap";
// import logo from "./logo.svg";
import "./App.css";
import WordsContainer from "./Containers/WordsContainer";
import UpdateForm from "./Components/UpdateForm";
import MustLearnWordsContainer from "./Containers/MustLearnWordsContainer";
// import SearchForm from "./Components/SearchForm";
class App extends Component {
  state = {
    languages: [],
    words: [],
    mustLearn: [],
    searchBar: ""
  };

  componentDidMount() {
    fetch("http://localhost:3000/languages")
      .then(resp => resp.json())
      .then(languageData =>
        this.setState({
          languages: languageData
        })
      );
    fetch("http://localhost:3000/words")
      .then(resp => resp.json())
      .then(wordData =>
        this.setState({
          words: wordData
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

  handleSelect = word => {
    let newArr = [...this.state.mustLearn];
    if (!newArr.includes(word)) {
      newArr = [word, ...this.state.mustLearn];
      this.setState({
        mustLearn: newArr
      });
    } else {
      return <Alert color="info">This is a info alert — check it out!</Alert>;
    }
  };

  handleUnselect = myWord => {
    let newArr = [...this.state.mustLearn].filter(word => word !== myWord);
    this.setState({
      mustLearn: newArr
    });
  };

  handleSearchBar = e => {
    console.log(e.target.value);
    this.setState({
      searchBar: e.target.value
    });
  };

  filterWordsBySearchBarInput = () => {
    return this.state.words.filter(word =>
      word.headword.toLowerCase().includes(this.state.searchBar.toLowerCase())
    );
  };

  render() {
    console.log(this.state.languages);
    return (
      <div>
        <FormGroup>
          <Label for="exampleSearch">Search</Label>
          <Input
            type="search"
            name="search"
            id="exampleSearch"
            placeholder="search word"
            value={this.state.searchBar}
            onChange={e => this.handleSearchBar(e)}
          />
        </FormGroup>
        <UpdateForm parentSubmit={this.submitHandler} />
        <WordsContainer
          words={this.filterWordsBySearchBarInput()}
          handleSelect={this.handleSelect}
        />
        <MustLearnWordsContainer
          mustLearnList={this.state.mustLearn}
          handleUnselect={this.handleUnselect}
        />
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
