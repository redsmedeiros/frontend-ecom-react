import { useParams } from 'react-router-dom'

const ProductScreen = ()=>{

    //usar um hook para obter os params da rota
    const params = useParams()
    //jogar o parametro dentro do atributo que vai ser usado
    const { slug } = params

    return(
        <div>{slug}</div>
    )
}

export default ProductScreen