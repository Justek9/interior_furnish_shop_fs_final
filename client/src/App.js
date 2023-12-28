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
          <Route path="/about" element={<AboutUs />}></Route>
        </Routes>
      </ContentContainer>
      <Footer />
    </PageContainer>
  );
}

export default App;
