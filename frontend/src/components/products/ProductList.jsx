import PropTypes from 'prop-types'
import ProductListItem from './ProductListItem';

function ProductList( { products  } ) {
  if (!products || products.length < 1) {
    return "No products found"
  }
  return (
    <div>
      <h1>Products list</h1>
        <div style={{ display: 'flex'}} className='list'>
            {
            products.map(product => (
                <ProductListItem key={product.id} product={product} />
            ))
            }   
    </div>
    </div>
  );
};

ProductList.propTypes = {
    products: PropTypes.arrayOf(PropTypes.object)
}

export default ProductList;