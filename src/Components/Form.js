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
  };

  render() {
    return (
      <form>
        <FormGroup>
          <FormControl type="text" placeholder="Headword" />
        </FormGroup>
        <FormGroup>
          <FormControl type="text" placeholder="Definition" />
        </FormGroup>
        <FormGroup>
          <FormControl type="text" placeholder="Example" />
        </FormGroup>
      </form>
    );
  }
}
