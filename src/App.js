import React, { Component } from "react";
import {
  Alert,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FormGroup,
  Input,
  Label,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown
} from "reactstrap";
// import logo from "./logo.svg";
import "./App.css";
import LanguagesContainer from "./Containers/LanguagesContainer";
import WordsContainer from "./Containers/WordsContainer";
import MustLearnWordsContainer from "./Containers/MustLearnWordsContainer";
import SearchForm from "./Forms/SearchForm";
import NewUserForm from "./Forms/NewUserForm";
import NewWordForm from "./Forms/NewWordForm";
import { Switch, Route, Link } from "react-router-dom";
import { planet } from "react-icons/md";
class App extends Component {
  state = {
    languages: [],
    words: [],
    filteredWordsBysearch: [],
    mustLearn: [],
    isOpen: false
  };

  render() {
    console.log("proverka", this.state.languages);
    return (
      <div>
        <div>
          <Navbar color="warning" light expand="md">
            <Link to="/">
              <ion-icon name="planet" size="large" />
            </Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <SearchForm
                    filterWordsBySearchBarInput={
                      this.filterWordsBySearchBarInput
                    }
                  />
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/components">
                    Components
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={Link} to="/createUser">
                    Create User
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://www.youtube.com/watch?v=sr8fjIXygWU">
                    GitHub
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Menu
                  </DropdownToggle>
                  <DropdownMenu right>
                    <Link to="/languages">
                      <DropdownItem className="text-info">
                        Languages
                      </DropdownItem>
                    </Link>
                    <Link to="/words">
                      <DropdownItem className="text-info">Words</DropdownItem>
                    </Link>
                    <Link to="/mustLearnWords">
                      <DropdownItem className="text-info">
                        Must Learn
                      </DropdownItem>
                    </Link>
                    <DropdownItem divider />
                    <DropdownItem>
                      <NewWordForm parentSubmit={this.submitHandler} />
                    </DropdownItem>
                    <DropdownItem className="text-info">
                      New Language
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
        </div>

        <Switch>
          <Route
            path="/words"
            render={() => (
              <WordsContainer
                languages={this.state.languages}
                words={this.state.filteredWordsBysearch}
                handleSelect={this.handleSelect}
              />
            )}
          />
          <Route
            path="/languages"
            render={() => (
              <LanguagesContainer languages={this.state.languages} />
            )}
          />
          <Route
            path="/mustLearnWords"
            render={() => (
              <MustLearnWordsContainer
                mustLearnList={this.state.mustLearn}
                handleUnselect={this.handleUnselect}
              />
            )}
          />
          <Route path="/createUser" component={NewUserForm} />
        </Switch>
      </div>
    );
  }

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

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
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

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/languages")
      .then(resp => resp.json())
      .then(languageData =>
        this.setState({
          languages: [...languageData]
        })
      );
    fetch("http://localhost:3000/api/v1/words")
      .then(resp => resp.json())
      .then(wordData =>
        this.setState({
          words: wordData,
          filteredWordsBysearch: wordData
        })
      );
  }

  filterWordsBySearchBarInput = value => {
    const newFilteredWords = this.state.words.filter(word =>
      word.headword.toLowerCase().includes(value.toLowerCase())
    );
    this.setState({
      filteredWordsBysearch: newFilteredWords
    });
  };
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
