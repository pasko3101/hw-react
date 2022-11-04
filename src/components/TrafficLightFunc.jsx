import { useState } from "react";
function TrafficLightFunc() {
  const [pos, setPos] = useState(0);

  const changeLight = () => {
    if (pos !== 2) {
      setPos(pos + 1);
    } else {
      setPos(0);
    }
  };

  return (
    <div className="light">
      <div
        className={`light__color light__color_red ${
          pos === 0 ? "active" : null
        }`}
      ></div>
      <div
        className={`light__color light__color_yellow ${
          pos === 1 ? "active" : null
        }`}
      ></div>
      <div
        className={`light__color light__color_green ${
          pos === 2 ? "active" : null
        }`}
      ></div>
      <button onClick={changeLight}>Funk</button>
    </div>
  );
}
export default TrafficLightFunc;
