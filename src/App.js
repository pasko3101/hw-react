import "./App.scss";
import Header from "./components/Header";
import HeaderClass from "./components/HeagerClass";
import DataDispClass from "./components/DataDispClass";
import DataDispFunc from "./components/DataDispFunc";
import TrafficLightFunc from "./components/TrafficLightFunc";
function App() {
  return (
    <>
      <Header></Header>
      <HeaderClass></HeaderClass>
      <h1>Hello world!</h1> <TrafficLightFunc></TrafficLightFunc>
      <DataDispClass id="1" />
      <DataDispFunc id="1" text="Some text" />
    </>
  );
}

export default App;
