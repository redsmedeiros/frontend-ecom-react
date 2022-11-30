import { BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import { LinkContainer } from 'react-router-bootstrap'

function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column site-container">
      <header>
        <Navbar bg="dark" variant="dark">
          <Container>
            <LinkContainer to="/">
                <Navbar.Brand>Ecommerce</Navbar.Brand>
            </LinkContainer>
          </Container>
        </Navbar>
      </header>
      <main>
        <Container>
          <Routes>
            <Route path="/products/:slug" element={<ProductScreen/>}/>.
            <Route path="/" element={<HomeScreen/>}/>.
          </Routes>
        </Container>
      </main>
      <footer>
        <div className="text-center">
          All Rights Reserved
        </div>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
