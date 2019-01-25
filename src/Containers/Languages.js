import React from "react";

class Languages extends React.Component {
  render() {
    return <div>{this.props.language.name}</div>;
  }
}
export default Languages;
