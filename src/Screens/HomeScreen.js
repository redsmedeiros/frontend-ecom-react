import data from "../data"

const HomeScreen = ()=>{
    return (
        <div><h1>Products</h1>
        <div className="products">
        {
          //codigo js: chamar data e acessar produtos com a função map que vai iterar cada obj - cada obj será um jsx
          data.products.map( product => (
            <div className="product" key={product.slug}>
              <a href={`/products/${product.slug}`}>
                <img src={product.image} alt={product.name}/>
              </a>
              
              <div className="product-info">
              <a href={`/products/${product.slug}`}>
                <p>{product.name}</p>
              </a>
               
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