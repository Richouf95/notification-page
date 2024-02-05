import "./App.css";
import Notifications from "./components/Notifications";

function App() {
  return (
    <div className="App">
      <main>
        <Notifications />
      </main>
      <footer>
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        <br />
        Coded by <a href="https://www.linkedin.com/in/wourichouf/" target="_blank">Abdoulaye Wouri Chouf</a>.
      </footer>
    </div>
  );
}

export default App;
