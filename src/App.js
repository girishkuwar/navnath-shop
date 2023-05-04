import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css';
import Layout from './components/Layout'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Products from "./pages/Products/Products";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>);
}

export default App;
