import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IMGS_URL } from '../../../config';
import { getMainIMG } from '../../../redux/productsRedux';

import styles from './ProductBox.module.scss';

const ProductBox = ({ product }) => {
  const img = useSelector((state) => getMainIMG(state, product.id));

  return (
    <Card className={styles.root}>
      <Card.Img variant="top" s src={IMGS_URL + img} className={styles.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>price from $ {product.price}</Card.Text>
        <Link to={`/products/${product.id}`}>
          <button>Show more</button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductBox;
