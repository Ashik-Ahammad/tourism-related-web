import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Home/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Order from './Components/Order/Order';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import Login from './Components/Login/Login';


function App() {
  return (
    <div className="App">



      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/order">
            <Order></Order>
          </Route>
          <Route path="/manageorder">
            <ManageOrder></ManageOrder>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>

        </Switch>
      </Router>

      <Footer></Footer>
    </div>
  );
}

export default App;
