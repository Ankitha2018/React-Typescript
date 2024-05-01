
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () =>
{
  const addToCart = () =>
  {
    
  }
  return (
    <div className="home">
      <section></section>
      <h1>Latest Products
        <Link to="/search" className='findmore'>More</Link>
      </h1>
      <main>
        <ProductCard
        productId='cbjcbdjcc'
        name='Apple earpods'
        price={ 200 }
        stock={ 10 }
        handler={ addToCart }
          img='https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg' />
        
        <ProductCard
        productId='cbjcbdjcc'
        name='Apple earpods'
        price={ 200 }
        stock={ 10 }
        handler={ addToCart }
          img='https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg' />
        
        <ProductCard
        productId='cbjcbdjcc'
        name='Apple earpods'
        price={ 200 }
        stock={ 10 }
        handler={ addToCart }
      img='https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg'/>
      </main>
    </div>
  )
}

export default Home