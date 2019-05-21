import React from "react";
import WordsContainer from "../Containers/WordsContainer";
import { Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

class LanguageCard extends React.Component {
  render() {
    return (
      <div>
        <Nav>
          <NavItem>
            <Link to="/words">{this.props.language.name}</Link>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
export default LanguageCard;
