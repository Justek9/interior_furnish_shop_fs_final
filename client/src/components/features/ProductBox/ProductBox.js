import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { IMGS_URL } from '../../../config';
import { getMainIMG } from '../../../redux/productsRedux';
import Button from '../../common/Button/Button';

import styles from './ProductBox.module.scss';

const ProductBox = ({ product }) => {
  
  const img = useSelector((state) => getMainIMG(state, product.id));

  return (
    <Card className={styles.root}>
      <Card.Img variant="top" src={IMGS_URL + img} className={styles.img} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>price from $ {product.price}</Card.Text>
        <Link to={`/products/${product.id}`}>
          <Button text="Show more" />
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProductBox;
