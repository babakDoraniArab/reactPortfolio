import { Switch, Route, useLocation } from "react-router";
import Sidebar from "./components/Sidebar/Sidebar";
import "./scss/index.scss";
import { AnimatePresence } from "framer-motion";
import About from "./components/about/About";
import Home from "./components/Home/Home";

function App() {
  const location = useLocation();

  return (
    <>
      <div className="App">
        <section className="sidebar">
          <Sidebar />
        </section>
        <section className="content">
          <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.key}>
              <Route path="/about">
                <About />
              </Route>

              <Route path="/home" exact>
                <Home />
              </Route>

              <Route path="/" exact>
                <Home />
              </Route>
            </Switch>
          </AnimatePresence>
        </section>
      </div>
    </>
  );
}

export default App;
