import React from "react";
import WordCard from "../Components/WordCard";
import { Container, Row, Col } from "reactstrap";

export default class WordsContainer extends React.Component {
  iterateEachWord() {
    return this.props.words.map(word => {
      return (
        <Col sm="12" md={{ size: 5, offset: 0 }}>
          <WordCard
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
        <Row> {this.iterateEachWord()}</Row>
      </Container>
    );
  }
}

//  WordsContainer;
