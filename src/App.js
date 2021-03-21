import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login2 from "./Components/Login2/Login2";
import Transport from "./Components/Transport/Transport";
import { createContext, useState } from "react";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/login">
            <Login2></Login2>
            {/* <Login></Login> */}
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/transport/:id">
            <Transport></Transport>
          </PrivateRoute>
          <Route>
            <Transport></Transport>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;

//https://travel-pundit.web.app deploy link
