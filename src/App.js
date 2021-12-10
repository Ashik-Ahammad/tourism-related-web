import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Home/Header/Header';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import ManageOrder from './Components/ManageOrder/ManageOrder';
import Login from './Components/Login/Login';
import AuthProvider from './Context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Bookingss from './Components/Bookings/Bookingss/Bookingss';
import AddService from './Components/AddService/AddService';
import NotFound from './Components/NotFound/NotFound';
import Aos from 'aos';
import "aos/dist/aos.css";
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className="App">


      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/manageorder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/bookingss/:serviceId">
              <Bookingss></Bookingss>
            </PrivateRoute>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
        <Footer></Footer>
      </AuthProvider>


    </div>
  );
}

export default App;
