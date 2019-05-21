import React from "react";
import { Container, Row, Col, FormGroup, Button } from "reactstrap";

import WordCard from "../Components/WordCard";
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
    // console.log(this.props.words);
    return this.props.words.map(word => {
      return (
        <Col sm="12" md={{ size: 5, offset: 0 }} key={word.headword}>
          <WordCard
            toggle={this.toggle}
            parent="container"
            word={word}
            key={word.id}
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
          <Row> {this.iterateEachWord()}</Row>
        </FormGroup>
      </Container>
    );
  }
}

//  WordsContainer;
