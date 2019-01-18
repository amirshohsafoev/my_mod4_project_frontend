import React from "react";
import WordCard from "../Components/WordCard";

export default class WordsContainer extends React.Component {
  iterateEachWord() {
    return this.props.words.map(word => {
      return <WordCard key={word.id} word={word} />;
    });
  }
  render() {
    return (
      <div>
        <h1>Words Container</h1>
        {this.iterateEachWord()}
      </div>
    );
  }
}

//  WordsContainer;
