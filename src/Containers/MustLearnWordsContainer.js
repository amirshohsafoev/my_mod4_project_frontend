import React from "react";
import WordCard from "../Components/WordCard";
import { Container, Row, Col } from "reactstrap";

class MustLearnWordsContainer extends React.Component {
  iterateEachWord() {
    return this.props.mustLearnList.map(word => {
      return (
        <Col sm="12" md={{ size: 5, offset: 0 }}>
          <WordCard parent="container" word={word} key={word.id} />
        </Col>
      );
    });
  }
  render() {
    // console.log(this.props);
    return (
      <Container>
        <Row> {this.iterateEachWord()}</Row>
      </Container>
    );
  }
}
export default MustLearnWordsContainer;
// <WordCard handleSelect={this.props.handleSelect} />;
