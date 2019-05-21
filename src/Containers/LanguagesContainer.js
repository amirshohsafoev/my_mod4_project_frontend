import React from "react";
import LanguageCard from "../Components/LanguageCard";

class LanguagesContainer extends React.Component {
  iterateEachLanguage() {
    console.log(this.props.languages);
    return this.props.languages.map(language => (
      <LanguageCard language={language} key={language.id} />
    ));
  }
  render() {
    return <div>{this.iterateEachLanguage()}</div>;
  }
}
export default LanguagesContainer;
