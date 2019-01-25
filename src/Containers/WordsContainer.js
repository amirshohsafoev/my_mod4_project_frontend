import React from "react";
import WordCard from "../Components/WordCard";
import Languages from "./Languages";
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

  iterateEachLanguage() {
    return this.props.languages.map(language => (
      <Languages language={language} key={language.id} />
    ));
  }
  iterateEachWord() {
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
          <Col> {this.iterateEachLanguage()}</Col>
        </FormGroup>
        <FormGroup>
          <Row> {this.iterateEachWord()}</Row>
        </FormGroup>
      </Container>
    );
  }
}

//  WordsContainer;
