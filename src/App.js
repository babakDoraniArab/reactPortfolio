import { Switch } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar";
import "./scss/index.scss";

function App() {
  return (
    <Switch>
      <div className="App">
        <section className="sidebar">
          <Sidebar />
        </section>

        <section className="content">
          <h1>test section </h1>
        </section>
      </div>
    </Switch>
  );
}

export default App;
