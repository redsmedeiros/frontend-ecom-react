import data from "../data"
import {Link} from 'react-router-dom'

const HomeScreen = ()=>{
    return (
        <div><h1>Products</h1>
        <div className="products">
        {
          //codigo js: chamar data e acessar produtos com a função map que vai iterar cada obj - cada obj será um jsx
          data.products.map( product => (
            <div className="product" key={product.slug}>
              <Link to={`/products/${product.slug}`}>
                <img src={product.image} alt={product.name}/>
              </Link>
              
              <div className="product-info">
              <Link to={`/products/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
               
                <p><strong></strong></p>
                <button>Add to cart</button>
              </div>
            </div>
          ))
        }
        </div></div>
    )
}

export default HomeScreen