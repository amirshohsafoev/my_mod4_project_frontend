import React from "react";
// import { Card, Button, CardTitle, CardText } from "reactstrap";
const WordCard = props => {
  // console.log(props.word.headword);
  let { word } = props;

  return (
    <div>
      <h2>{word.headword}</h2>
      <h4>Defenition:</h4>
      <p>{word.defenition}</p>
      <h4>Example:</h4>
      <p>{word.example}</p>
    </div>
  );
};

export default WordCard;
// <Card body outline color="success">
//   </Card>
