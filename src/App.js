import { useReducer } from "react";
import logo from "./logo.svg";
import "./App.css";

const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);

const step = 50;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_R":
      return Object.assign({}, state, { r: limitRGB(state.r + step) });
    case "DECREMENT_R":
      return Object.assign({}, state, { r: limitRGB(state.r - step) });
    case "INCREMENT_G":
      return Object.assign({}, state, { g: limitRGB(state.g + step) });
    case "DECREMENT_G":
      return Object.assign({}, state, { g: limitRGB(state.g - step) });
    case "INCREMENT_B":
      return Object.assign({}, state, { b: limitRGB(state.b + step) });
    case "DECREMENT_B":
      return Object.assign({}, state, { b: limitRGB(state.b - step) });
    case "RESET":
      return Object.assign({}, state, { r: 0, g: 0, b: 0 });
    default:
      return state;
  }
};

function App() {
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ color: `rgb(${r}, ${g}, ${b})` }}>useRducer Example</h1>
        <div className="btn-container">
          <span>R</span>
          <div>
            <button onClick={() => dispatch({ type: "INCREMENT_R" })}>
              ➕
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT_R" })}>
              ➖
            </button>
          </div>
        </div>
        <div className="btn-container">
          <span>G</span>
          <div>
            <button onClick={() => dispatch({ type: "INCREMENT_G" })}>
              ➕
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT_G" })}>
              ➖
            </button>
          </div>
        </div>
        <div className="btn-container">
          <span>B</span>
          <div>
            <button onClick={() => dispatch({ type: "INCREMENT_B" })}>
              ➕
            </button>
            <button onClick={() => dispatch({ type: "DECREMENT_B" })}>
              ➖
            </button>
          </div>
        </div>
        <button
          className="btn-rest"
          onClick={() => dispatch({ type: "RESET" })}
        >
          Reset
        </button>
      </header>
    </div>
  );
}

export default App;
