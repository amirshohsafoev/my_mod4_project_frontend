import React from "react";
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  FormControl
} from "reactstrap";

export default class NewWordForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      headword: "",
      definition: "",
      example: "",
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  // fadeNewForm = () => {
  //   console.log(this.state.fadeIn);
  //   this.setState({
  //     fadeIn: !this.state.fadeIn
  //   });
  // };

  changeHandler = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    // console.log(e);
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
      <div>
        <Form onSubmit={this.submitHandler}>
          <FormGroup>
            <Button color="warning" onClick={this.toggle}>
              New Word
            </Button>
            <Modal
              isOpen={this.state.modal}
              toggle={this.toggle}
              className={this.props.className}
            >
              <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
              <ModalBody>
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
              </ModalBody>
              <ModalFooter>
                <Button color="info" onClick={this.toggle}>
                  Add New Word
                </Button>{" "}
                <Button color="secondary" onClick={this.toggle}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
