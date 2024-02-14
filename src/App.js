import "./App.css";
import { useState } from "react";

function App() {
  const [activeActivity, setActiveActivity] = useState(null);

  const [getThingToDo, setGetThingToDo] = useState();

  const handleAPICall = async (e) => {
    e.preventDefault();

    let url = activeActivity
      ? `http://www.boredapi.com/api/activity?type=${activeActivity}`
      : `http://www.boredapi.com/api/activity/`;

    const res = await fetch(url);
    const data = await res.json();
    setGetThingToDo(data);
    console.log(data);
  };
  return (
    <div className="App">
      <Header
        activeActivity={activeActivity}
        setActiveActivity={setActiveActivity}
        onSubmit={handleAPICall}
      />
    </div>
  );
}

function Header({ activeActivity, setActiveActivity, onSubmit }) {
  const [activityBarShown, setActivityBarShown] = useState(false);

  const handleClick = () => {
    setActivityBarShown((prev) => !prev);
  };

  const handleChange = ({ target }) => {
    setActiveActivity(target.value);
  };
  return (
    <div>
      <h1>What should I Do?</h1>
      <NavBar onClick={handleClick} activityBarShown={activityBarShown} />
      <hr />
      <form onSubmit={onSubmit}>
        {activityBarShown && (
          <ActivityType
            onChange={handleChange}
            activeActivity={activeActivity}
          />
        )}
        <input type="submit" />
      </form>
    </div>
  );
}

function NavBar({ onClick, activityBarShown }) {
  return (
    <nav className="nav-bar">
      <button onClick={onClick}>
        {!activityBarShown ? "Show" : "Hide"} ActivityType
      </button>
      <button>Reset</button>
    </nav>
  );
}

function ActivityType({ activeActivity, onChange }) {
  let activityArr = [
    "",
    "charity",
    "cooking",
    "music",
    "diy",
    "education",
    "social",
    "busywork",
    "recreational",
    "relaxation",
  ];
  return (
    <div className="input-bars">
      <select id="Activity" onChange={onChange} defaultValue={activeActivity}>
        {activityArr.map((activity, i) => (
          <option key={activity + i} value={activity}>
            {" "}
            {activity}
          </option>
        ))}
      </select>
    </div>
  );
}
export default App;
