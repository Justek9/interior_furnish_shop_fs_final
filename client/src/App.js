import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { fetchProducts } from './redux/productsRedux';
import { useDispatch } from 'react-redux';

import Home from './components/pages/Home/Home';
import Header from './components/layout/Header/Header';
import AboutUs from './components/pages/AboutUs/AboutUs';
import Footer from './components/layout/Footer/Footer';
import ContentContainer from './components/views/ContentContainer/ContentContainer';
import PageContainer from './components/views/PageContainer/PageContainer';
import SearchPage from './components/pages/SearchPage/SearchPage';
import SearchResults from './components/features/SearchResults/SearchResults';
import ProductDetails from './components/features/ProductDetails/ProductDetails';
import Contact from './components/pages/Contact/Contact';
import Login from './components/pages/LoginPage/Login';
import Register from './components/pages/Register/Register';

function App() {
  const dispatch = useDispatch();

  // fetch products from server and add them to redux state
  useEffect(() => dispatch(fetchProducts()), [dispatch]);

  return (
    <PageContainer>
      <ContentContainer>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Home />}></Route>
          <Route path="/products/:id" element={<ProductDetails />}></Route>
          <Route path="/about" element={<AboutUs />}></Route>
          <Route path="/search" element={<SearchPage />}></Route>
          <Route
            path="/search/:searchPhrase"
            element={<SearchResults />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

export default App;
