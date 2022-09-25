import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <Dictionary />
      <footer>
        My code on{" "}
        <a
          href="https://github.com/AnastasiiaSemenovaa/react-dictionary"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>{" "}
      </footer>
    </div>
  );
}

export default App;
