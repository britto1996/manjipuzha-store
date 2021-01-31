import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Cart from "./screens/Cart";
import Home from "./screens/Home";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className="py-3">
          <Container>
            <Route path="/cart" component={Cart} />
            <Route path="/" component={Home} exact />
          </Container>
        </main>
      </Router>
    </div>
  );
};

export default App;
