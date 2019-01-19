import React from "react";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormControl
} from "reactstrap";

export default class UpdateForm extends React.Component {
  state = {
    headword: "",
    definition: "",
    example: ""
  };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(e);
    this.props.parentSubmit(this.state);
    this.setState({
      headword: "",
      definition: "",
      example: ""
    });
    e.target.reset();
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <br />
        <input
          type="text"
          name="headword"
          value={this.state.name}
          placeholder="headword"
          onChange={this.changeHandler}
        />
        <br />
        <input
          type="text"
          name="definition"
          value={this.state.age}
          placeholder="definition"
          onChange={this.changeHandler}
        />
        <br />
        <input
          type="text"
          name="example"
          value={this.state.house}
          placeholder="example"
          onChange={this.changeHandler}
        />
        <br />

        <button>Add</button>
      </form>
    );
  }
}
