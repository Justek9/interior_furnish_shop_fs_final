import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import { fetchProducts } from './redux/productsRedux';
import { useDispatch } from 'react-redux';

import Home from './components/pages/Home/Home';
import Header from './components/layout/Header/Header';

function App() {
  const dispatch = useDispatch();

  // fetch products from server and add them to redux state
  useEffect(() => dispatch(fetchProducts()), [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Home />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
