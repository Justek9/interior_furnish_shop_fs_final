import { Route, Routes } from 'react-router-dom';
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
import Register from './components/pages/Register/Register';
import ProductByCategory from './components/pages/ProductByCategory/ProductByCategory';
import Logout from './components/pages/Logout/Logout';
import CartOverview from './components/cart/CartOverview/CartOverview';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './redux/productsRedux';
import CartSummary from './components/cart/CartSummary/CartSummary';
import Login from './components/pages/Login/Login';

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
          <Route path="/shop/:category" element={<ProductByCategory />}></Route>
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
          <Route path="/register" element={<Register />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/cart" element={<CartOverview />}></Route>
          <Route path="/cart-summary" element={<CartSummary />}></Route>
        </Routes>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

export default App;
