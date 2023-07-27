import React from "react";
import ReactDOM from "react-dom/client";

import "./index.scss";
import { Counter } from "./components/Counter";

const App = () => (
  <div className="text-center mt-10">
    <Counter initialCounter={0} />
  </div>
);
ReactDOM.createRoot(document.getElementById("app") as HTMLElement).render(<App />);
