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
  // console.log(props.word.headword);
  let { word } = props;
  // let { handleSelect } = props;
  let { parent } = props;
  if ((parent = "container")) {
    return (
      <Card>
        <CardHeader tag="h3" className="text-danger">
          {word.headword}
        </CardHeader>
        <CardBody>
          <CardTitle className="text-primary">Definition:</CardTitle>
          <CardText className="text-info">{word.definition}</CardText>
          <CardTitle className="text-primary">Example:</CardTitle>
          <CardText className="text-info">{word.example}</CardText>
        </CardBody>
        <Button className="btn btn-warning">Must Learn</Button>{" "}
      </Card>
    );
  } else {
    return <h1>Do not know anything yet!</h1>;
  }
};

export default WordCard;
