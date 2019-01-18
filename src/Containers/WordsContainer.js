import React from "react";
import WordCard from "../Components/WordCard";
import { Container, Row, Col } from "reactstrap";

export default class WordsContainer extends React.Component {
  iterateEachWord() {
    return this.props.words.map(word => {
      return <WordCard key={word.headword} word={word} />;
    });
  }
  render() {
    return (
      <Container>
        <Col xs="4">{this.iterateEachWord()}</Col>
      </Container>
    );
  }
}

//  WordsContainer;
