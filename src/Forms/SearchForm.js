import React from "react";
import { Input } from "reactstrap";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBar: ""
    };
  }
  handleSearchBar = e => {
    console.log(e.target.value);
    this.setState({
      searchBar: e.target.value
    });
    this.props.filterWordsBySearchBarInput(e.target.value);
  };
  render() {
    return (
      <Input
        type="search"
        name="search"
        id="exampleSearch"
        placeholder="search word"
        value={this.state.searchBar}
        onChange={e => this.handleSearchBar(e)}
      />
    );
  }
}

export default SearchForm;
