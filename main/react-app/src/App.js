import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Container from './components/Container';
import Detail from "./components/Detail";
import Cart from "./components/Cart";
import Payment from "./components/Payment";
import Login from "./components/Login";
import Register from "./components/Register";
import Favorite from "./components/Favorite";
import Admin_Add from "./components/Admin_Add"
import Admin_Update from "./components/Admin_Update"
import GlobalStyle from "./components/GlobalStyle";

function App() {

  const products = useSelector(state=>state.product)
  const cart_items = useSelector(state=>state.cart)
  const favorite_items = useSelector(state=>state.favorite)

  return (
    <>
      <GlobalStyle />

      <Router>
        <Navbar />
        <Container>
            <Switch>
              <Route path="/" exact component={() => <Home products={products}/>} />
              <Route path="/cart" exact component={() => <Cart products={cart_items}/>} />
              <Route path="/login" exact component={() => <Login />} />
              <Route path="/register" exact component={() => <Register />} />
              <Route path="/payment" exact component={() => <Payment products={cart_items}/>} />
              <Route path="/detail/:id" exact component={() => <Detail products={products}/>} />
              <Route path="/admin_add" exact component={() => <Admin_Add/>} />
              <Route path="/admin_update/:id" exact component={() => <Admin_Update products={products}/>} />
              <Route path="/favorite" exact component={() => <Favorite products={favorite_items}/>} />
            </Switch>
          <Footer />
        </Container>
      </Router>
      
    </>
  );
}

export default App;
