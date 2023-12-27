// import Shop from '../Shop/Shop';
import { Card } from 'react-bootstrap';
import { IMGS_URL } from '../../../config';


const Home = () => {
  return (
    <Card>
      <Card.Img variant="top" src={IMGS_URL + 'prod1 (1).jpg'} />
    </Card>
  );
};

export default Home;
