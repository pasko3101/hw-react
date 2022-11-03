import React from "react";
import { Nav } from "./Nav";
class HeaderClass extends React.PureComponent {
  render() {
    return (
      <header className="header">
        <a href="#">LOGO</a>
        <Nav></Nav>
      </header>
    );
  }
}
export default HeaderClass;
