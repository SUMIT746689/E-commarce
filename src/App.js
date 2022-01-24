import Home from './component/home/Home.js';
import NavCom from './component/nav/Nav';
import Login from './component/varifications/Login';
import Registration from './component/varifications/Registration';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Footer from './component/footer/Footer';
import Items from './component/items/Items';


function App() {
  return (
  <Router>
    <NavCom/>
    <Switch>
      <Route path='/' exact><Home/></Route>
      <Route path='/home' exact><Home/></Route>
      <Route path='/item' exact><Items/></Route>
      <Route path='/login' exact><Login/></Route>
      <Route path='/logout' exact><Registration/></Route>
      
    </Switch>
    <Footer/>
  </Router>
  );
}

export default App;
