import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from './Components/Login/Login';
function App() {
  return (
    <div>
      <Router>
    <Header></Header>
    {/* <Home></Home> */}
    <Switch>
      <Route path="/login">
      <Login></Login>
      </Route>
      <Route exact path="/">
       <Home></Home>
      </Route>
    </Switch>
    </Router>
    </div>
  );
}

export default App;
