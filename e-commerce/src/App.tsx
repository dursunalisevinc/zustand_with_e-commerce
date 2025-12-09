import './App.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Products from './pages/products/Products';
import ProductsDetails from './pages/details/ProductsDetails';

function App() {

  return (
    <>
      <BrowserRouter>
        {/* Navigation */}
        <nav>
          <Link to="/">dashboard</Link> |{" "}
          <Link to="/:id">details</Link> |{" "}
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/:id" element={<ProductsDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
