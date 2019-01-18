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
  console.log(props.word.headword);
  let { word } = props;

  return (
    <Card body inverse style={{ backgroundColor: "#333", borderColor: "#333" }}>
      <CardHeader style={{ backgroundColor: "#3cc194" }}>
        {word.headword}
      </CardHeader>
      <CardBody>
        <CardTitle>Defenition:</CardTitle>
        <CardText>{word.definition}</CardText>
        <CardTitle>Example:</CardTitle>
        <CardText>{word.example}</CardText>
      </CardBody>
    </Card>
  );
};

export default WordCard;
