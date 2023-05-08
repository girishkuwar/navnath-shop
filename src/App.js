import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products'
import About from './pages/About/About'
import Brand from './pages/BrandPage/Brand';
import ProductPage from "./pages/ProductPage/ProductPage"
import Signup from './pages/Login/Signup';
import Login from './pages/Login/Login';
// var loadScript = function(src) {
function App() {


  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="productpage/:id" element={<ProductPage />} />
            <Route path="about" element={<About />} />
            <Route path="brand/:id" element={<Brand />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
