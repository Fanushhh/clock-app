
import PropTypes from "prop-types";


export const Clock = ({time, isItLate}) => {

  return (
    <div>
      <div className="greeting-container">
        <img
          className="time-icon"
          src={
            isItLate
              ? "/assets/desktop/icon-moon.svg"
              : "/assets/desktop/icon-sun.svg"
          }
          alt="daytime/nightime icon"
        />
        <p className="greeting">
          {isItLate ? "Good evening" : "Good morning"}, it&apos;s currently
        </p>
      </div>

      {time && <div>
          <h1 className="current-time">
            {time.datetime.slice(11, 16)}
            <span
            className="timezone"
              
            >
              {time.abbreviation}
            </span>
          </h1>
          <p className="location">in {time.timezone.replace("/", ", ")}</p>
      </div>}
    </div>
  );
};

Clock.propTypes = {
  time: PropTypes.object,
  isItLate: PropTypes.bool
}