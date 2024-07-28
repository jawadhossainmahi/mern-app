import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from './screens/Login';
import Signup from './screens/Signup';
import Cart from './screens/Cart';
import CartModal from './modals/CartModal';
import MyOrders from './screens/MyOrders';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/signup' element={<Signup/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/my-orders' element={<MyOrders/>}/>
      </Routes>
    </Router>
  );
}

export default App;
