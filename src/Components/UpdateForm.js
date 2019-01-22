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
      <Form onSubmit={this.submitHandler}>
        <FormGroup>
          <Label>Headword</Label>
          <Input
            placeholder="Type in a headword"
            type="text"
            name="headword"
            value={this.state.name}
            onChange={this.changeHandler}
          />
          <Label>Definition</Label>
          <Input
            type="textarea"
            name="definition"
            id="exampleText"
            placeholder="Type in a definition"
            onChange={this.changeHandler}
          />
          <Label>Example</Label>
          <Input
            type="textarea"
            name="example"
            id="exampleText"
            value={this.state.house}
            placeholder="Type in an example"
            onChange={this.changeHandler}
          />
          <Button outline color="info">
            Add New Word
          </Button>
        </FormGroup>
      </Form>
    );
  }
}
