import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Cart from "./screens/Cart";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import Signin from "./screens/Signin";
import Register from "./screens/Register";
import ProductList from "./screens/ProductList";
import UserList from "./screens/UserList";
import OrderList from "./screens/OrderList";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/cart" component={Cart} />
            <Route path="/signin" component={Signin} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/admin/users" component={UserList} />
            <Route path="/admin/products" component={ProductList} />
            <Route path="/admin/orders" component={OrderList} />
            <Route path="/" component={Home} exact />
          </Container>
        </main>
      </Router>
    </div>
  );
};

export default App;
