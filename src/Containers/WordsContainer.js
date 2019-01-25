import React from "react";
import WordCard from "../Components/WordCard";
import { Container, Row, Col, FormGroup, Button } from "reactstrap";

export default class WordsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { collapse: false };
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }
  iterateEachWord() {
    return this.props.words.map(word => {
      return (
        <Col sm="12" md={{ size: 5, offset: 0 }}>
          <WordCard
            toggle={this.toggle}
            parent="container"
            word={word}
            key={word.example}
            handleSelect={this.props.handleSelect}
          />
        </Col>
      );
    });
  }
  render() {
    return (
      <Container>
        <FormGroup>
          <Button color="white" className="text-info">
            Words
          </Button>
          <Row> {this.iterateEachWord()}</Row>
        </FormGroup>
      </Container>
    );
  }
}

//  WordsContainer;
