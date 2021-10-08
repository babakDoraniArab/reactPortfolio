import { Switch } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar";
import "./scss/index.scss";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
<>
    <Switch>
      <div className="App">
        <section className="sidebar">
          <Sidebar />
        </section>
    <AnimatePresence exitBeforeEnter>
        <section className="content">
          <h1>test section </h1>
        </section>
      </AnimatePresence>
      </div>
    </Switch>
    </>
  );
}

export default App;
