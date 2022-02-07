import task from "../assets/task.gif";
import "./styles.css";

function App() {
  return (
    <div>
      <header className="header">
        <img src={task} className="logo" alt="logo" />
        <p>Build To-Do Application</p>
        <a
          className="link"
          href="https://codesandbox.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodeSandbox
        </a>
      </header>
    </div>
  );
}

export default App;
