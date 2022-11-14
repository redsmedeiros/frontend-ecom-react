import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App() {
  return (
    <BrowserRouter>
      <div>
      <header>
        <a href='/'>Ecommerce</a>
      </header>
      <main>
        <Routes>
        <Route path="/products/:slug" element={<ProductScreen/>}/>.
          <Route path="/" element={<HomeScreen/>}/>.
        </Routes>
      </main>
    </div>
    </BrowserRouter>
  );
}

export default App;
