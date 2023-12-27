import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home/Home';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Home />}></Route>
      </Routes>
    </Container>
  );
}

export default App;
