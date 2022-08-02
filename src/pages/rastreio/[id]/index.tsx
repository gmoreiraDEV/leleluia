import { GetServerSideProps } from 'next'
import { sanityClient } from '../../../../sanity'
import Layout from '../../../components/Layout'
import { IInvoice } from '../../../../types/api/invoice'
import {
    searchInvoiceByCPF,
    searchInvoiceByID,
} from '../../../utils/queries/search'
import { Button, Container, Header, Wrapper } from './styles'
import Status from '../../../components/Status'
import { MouseEvent, useState } from 'react'
import Details from '../../../components/Details'

interface IProps {
    invoices: IInvoice[]
}

const OneTracking: React.FC<IProps> = ({ invoices }) => {
    const [showDetails, setShowDetails] = useState(false)
    const [invoiceId, setInvoiceId] = useState('')

    const handleDetails = (e: MouseEvent, id: string) => {
        e.stopPropagation()
        setInvoiceId(id)
        setShowDetails(!showDetails)
    }

    return (
        <Layout>
            <Container>
                {invoices?.map((invoice) => {
                    return (
                        <Wrapper key={invoice._id}>
                            <Header>
                                <h2>Pedido #{invoice?.numberInvoice}</h2>
                                {showDetails && invoice._id === invoiceId ? (
                                    <Button
                                        onClick={(e) => handleDetails(e, '')}
                                    >
                                        Fechar detalhes
                                    </Button>
                                ) : (
                                    <Button
                                        onClick={(e) =>
                                            handleDetails(e, invoice?._id)
                                        }
                                    >
                                        Ver detalhes
                                    </Button>
                                )}
                            </Header>
                            <Status invoice={invoice} />
                            {showDetails && invoice._id === invoiceId && (
                                <Details invoice={invoice} />
                            )}
                            <hr />
                        </Wrapper>
                    )
                })}
            </Container>
        </Layout>
    )
}

export default OneTracking

export const getServerSideProps: GetServerSideProps = async ({
    params,
    query,
}) => {
    if (query.c) {
        const invoices = await sanityClient
            .fetch(searchInvoiceByCPF(`${query?.c}`))
            .then((result) => result)
            .catch((err) => console.log(err))

        return {
            props: {
                invoices,
            },
        }
    } else {
        const invoices = await sanityClient
            .fetch(searchInvoiceByID(`${params?.id}`))
            .then((result) => result)
            .catch((err) => console.log('ERRROOOOOUUU', err))

        return {
            props: {
                invoices,
            },
        }
    }
}
