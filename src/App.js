import data from "./data";

function App() {
  return (
    <div>
      <header>
        <a href='/'>Ecommerce</a>
      </header>
      <main>
        <h1>Products</h1>
        <div className="products">
        {
          //codigo js: chamar data e acessar produtos com a função map que vai iterar cada obj - cada obj será um jsx
          data.products.map( product => (
            <div className="product" key={product.slug}>
              <a href={`/products/${product.slug}`}>
                <img src={product.image} alt={product.name}/>
              </a>
              
              <div className="product-info">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button>Add to cart</button>
              </div>
            </div>
          ))
        }
        </div>
      </main>
    </div>
  );
}

export default App;
