
import "./App.css";

import {Quote} from "./components/Quote";
import {Clock} from "./components/Clock";
export default function App() {



  return (
    <>
      
      <main className="wrapper">
        <img className="hero-img" src="./assets/desktop/bg-image-daytime.jpg" alt="day image" />
          <Quote />
          <div className="clock-wrapper">
            <Clock />
            <button>More <img src="./assets/desktop/icon-arrow-down.svg"/></button>
          </div>

      </main>
    </>
  );
}