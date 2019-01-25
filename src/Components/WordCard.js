import React from "react";
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from "reactstrap";
const WordCard = props => {
  // console.log(props.toggle);
  let { word } = props;
  let { handleSelect } = props;
  let { handleUnselect } = props;
  let { mustWord } = props;
  let { toggle } = props;
  if (props.parent === "container") {
    return (
      <Card>
        <CardHeader onClick={toggle} tag="h3" className="text-danger">
          {word.headword}
        </CardHeader>
        <CardBody>
          <CardTitle className="text-primary">Definition:</CardTitle>
          <CardText className="text-info">{word.definition}</CardText>
          <CardTitle className="text-primary">Example:</CardTitle>
          <CardText className="text-info">{word.example}</CardText>
        </CardBody>
        <Button onClick={() => handleSelect(word)} className="btn btn-warning">
          Must Learn
        </Button>{" "}
      </Card>
    );
  } else {
    return (
      <Card>
        <CardHeader onClick={toggle} tag="h3" className="text-danger">
          {mustWord.headword}
        </CardHeader>
        <CardBody>
          <CardTitle className="text-primary">Definition:</CardTitle>
          <CardText className="text-info">{mustWord.definition}</CardText>
          <CardTitle className="text-primary">Example:</CardTitle>
          <CardText className="text-info">{mustWord.example}</CardText>
        </CardBody>
        <Button
          onClick={() => handleUnselect(mustWord)}
          className="btn btn-danger"
        >
          I have learned
        </Button>{" "}
      </Card>
    );
  }
};

export default WordCard;
