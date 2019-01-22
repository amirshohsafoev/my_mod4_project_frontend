import React from "react";
import WordCard from "../Components/WordCard";
import { Container, Row, Col } from "reactstrap";

class MustLearnWordsContainer extends React.Component {
  iterateEachWord() {
    return this.props.mustLearnList.map(word => {
      return (
        <Col sm="12" md={{ size: 5, offset: 0 }}>
          <WordCard
            mustWord={word}
            key={word.headword}
            handleUnselect={this.props.handleUnselect}
          />
        </Col>
      );
    });
  }
  render() {
    // console.log(this.props);
    return (
      <Container>
        <h1>Must Learn!</h1>
        <Row> {this.iterateEachWord()}</Row>
      </Container>
    );
  }
}
export default MustLearnWordsContainer;
// <WordCard handleSelect={this.props.handleSelect} />;
