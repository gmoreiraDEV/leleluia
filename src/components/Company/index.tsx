import { Buildings, Phone } from 'phosphor-react'
import { Container } from './styles'
import { ICompany } from '../../../types/api/company'

interface IProps {
    company: ICompany
}

const Company: React.FC<IProps> = (props) => {
    const { company } = props
    return (
        <Container>
            <h5>{company.name}</h5>
            <p>
                <Phone size={32} weight="fill" />
                {String(company.phone).replace(
                    /^(\d{2})(\d{1,5})(\d{4})/,
                    '($1) $2-$3'
                )}
            </p>
            <p>
                <Buildings size={32} weight="fill" />{' '}
                {String(company.cnpj).replace(
                    /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
                    '$1.$2.$3/$4-$5'
                )}
            </p>
        </Container>
    )
}

export default Company
