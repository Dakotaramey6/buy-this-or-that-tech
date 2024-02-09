import "./App.css";
import { useState } from "react";

function App() {
  const [searchBarShown, setSearchBarShown] = useState(false);

  const handleClick = () => {
    setSearchBarShown((prev) => !prev);
  };
  return (
    <div className="App">
      <Header searchBarShown={searchBarShown} onClick={handleClick} />
    </div>
  );
}

function Header({ onClick, searchBarShown }) {
  return (
    <div>
      <h1>This Or That</h1>
      <NavBar onClick={onClick} searchBarShown={searchBarShown} />
      <hr />
      {searchBarShown && <SearchBar />}
    </div>
  );
}

function NavBar({ onClick, searchBarShown }) {
  return (
    <nav className="nav-bar">
      <button>Remove Placeholder1</button>
      <button onClick={onClick}>
        {!searchBarShown ? "Show" : "Hide"} Search Bar
      </button>
      <button>Reset</button>
      <button>Remove Placeholder2</button>
    </nav>
  );
}

function SearchBar() {
  return (
    <div className="input-bars">
      <input id="item1" />
      <input id="item2" />
    </div>
  );
}
export default App;
