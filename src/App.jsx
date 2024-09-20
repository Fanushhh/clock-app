import "./App.css";
import React from "react";
import { Quote } from "./components/Quote";
import { Clock } from "./components/Clock";
import { useStore } from "./useStore";

const lightMode = {
  background: "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, .75) 100%)",
  color: "black",
};
const darkMode = {
  background: "linear-gradient(90deg, rgba(0, 0, 0, .75) 75%, rgba(0, 0, 0, .75) 100%)",
  color: "white",
};

export default function App() {
  const [time, setTime] = React.useState(null);
  const isItLate = Number(time?.datetime.slice(11, 13)) > 12;
  
  const moreDetails = useStore((state) => state.moreDetails); // Get the moreDetails from the store
  const toggleMoreDetails = useStore((state) => state.toggleMoreDetails); // Get the toggle function

  React.useEffect(() => {
    // Fetches the date and time along with other geolocation details from the API
    async function getDate() {
      try {
        const timeData = await fetch("https://worldtimeapi.org/api/ip");
        const timePayload = await timeData.json();
        setTime(timePayload);
      } catch (error) {
        console.error("Error fetching date:", error);
      }
    }
    getDate();
    const intervalID = setInterval(() => {
      getDate();
    }, 30000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <>
      <main className="wrapper">
        <section className={`clock-container ${moreDetails ? "shrinked" : ""}`}>
          <img
            className="hero-img"
            src={`./assets/desktop/bg-image-${isItLate ? "nighttime" : "daytime"}.jpg`}
            alt="day image"
          />
          <Quote /> 
          <div className="clock-wrapper">
            <Clock time={time} isItLate={isItLate} />
            <button onClick={toggleMoreDetails}>
              {moreDetails ? "Less" : "More"}{" "}
              <img src={`./assets/desktop/icon-arrow-${moreDetails ? "down2" : "up2"}.svg`} />
            </button>
          </div>
        </section>
        <section
          className={`details-wrapper ${moreDetails ? "" : "hide-details"}`}
          style={isItLate ? darkMode : lightMode}
        >
          <div className="details-container">
            <div className="detail">
              <div>
                <h4>Current Timezone</h4>
                <h2>{time?.timezone}</h2>
              </div>
              <div>
                <h4>Day of the Year</h4>
                <h2>{time?.day_of_year}</h2>
              </div>
            </div>
            <div className="vertical-line"></div>
            <div className="detail">
              <div>
                <h4>Day of the Week</h4>
                <h2>{time?.day_of_week}</h2>
              </div>
              <div>
                <h4>Week Number</h4>
                <h2>{time?.week_number}</h2>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
