import React from "react";
class TrafficLightClass extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      pos: 0,
    };
  }

  changeLight = () => {
    if (this.state.pos !== 2) {
      this.setState({ pos: this.state.pos + 1 });
    } else {
      this.setState({ pos: 0 });
    }
  };

  render() {
    return (
      <div className="light">
        <div
          className={`light__color light__color_red ${
            this.state.pos === 0 ? "active" : ""
          }`}
        ></div>
        <div
          className={`light__color light__color_yellow ${
            this.state.pos === 1 ? "active" : ""
          }`}
        ></div>
        <div
          className={`light__color light__color_green ${
            this.state.pos === 2 ? "active" : ""
          }`}
        ></div>
        <button onClick={this.changeLight}>Change</button>
      </div>
    );
  }
}
export default TrafficLightClass;
