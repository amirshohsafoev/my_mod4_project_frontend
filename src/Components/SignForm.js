import React from "react";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

export default class SignForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for="exampleAddress">Username</Label>
          <Input
            type="text"
            name="address"
            id="exampleAddress"
            placeholder="Username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress">First Name</Label>
          <Input
            type="text"
            name="address"
            id="exampleAddress"
            placeholder="First name"
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleAddress">Last Name</Label>
          <Input
            type="text"
            name="address"
            id="exampleAddress"
            placeholder="Last name"
          />
        </FormGroup>
        <Button>Sign in</Button>
      </Form>
    );
  }
}
