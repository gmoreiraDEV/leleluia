import { IProduct } from '../../../types/api/invoice'

interface IProps {
    product: IProduct
}

const Product: React.FC<IProps> = (props) => {
    const { product } = props
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.quantity}</td>
        </tr>
    )
}

export default Product
