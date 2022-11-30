import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = (props)=>{

    const {product} = props

    return (
        <Card key={product.slug}>
            <Link to={`/products/${product.slug}`}>
                <img src={product.image} alt={product.name} className="card-img-top"/>
            </Link>

            <Card.Body>
                <Link to={`/products/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>
            <Rating rating={product.rating} numReviews={product.numReviews}/>
            <Card.Text></Card.Text>
                <Button>Add to Cart</Button>
            </Card.Body>
        </Card>
    )
}

export default Product