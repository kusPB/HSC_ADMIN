import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
// import Navbar from "./components/Navbar/Navbar";
import Register from "./components/Register/Register";
import CreatePage from "./pages/CreatePage/CreatePage";
import OverviewPage from "./pages/OverviewPage/OverviewPage";
import "./App.css"
import MonitoringPage from "./pages/MonitoringPage/MonitoringPage";
import TestingPage from "./pages/TestingPage/TestingPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/overview">
          <OverviewPage/>
        </Route>
        <Route path="/create">
          <CreatePage/>
        </Route>
        <Route path="/monitoring">
          <MonitoringPage/>
        </Route>
        <Route path="/testing">
          <TestingPage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
