import { IInvoice } from '../../../types/api/invoice'
import Company from '../Company'
import Product from '../Product'
import { Container, Header, Wrapper, Content } from './styles'

interface IProps {
    invoice: IInvoice
}

const Details: React.FC<IProps> = (props) => {
    const { invoice } = props
    return (
        <Container>
            <Header>
                <h3>DETALHES DO PEDIDO</h3>
            </Header>
            <Wrapper>
                <Content>
                    <h4>EMPRESA</h4>
                    <hr />
                    <Company company={invoice?.company} />
                </Content>
                <Content>
                    <h4>PRODUTOS</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Quantidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            {invoice.products.map((product) => {
                                return (
                                    <Product
                                        key={product.name}
                                        product={product}
                                    />
                                )
                            })}
                        </tbody>
                    </table>
                </Content>
            </Wrapper>
        </Container>
    )
}

export default Details
