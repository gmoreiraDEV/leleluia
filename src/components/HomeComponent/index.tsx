import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../Layout'
import {
    Container,
    Heading,
    ImageWrapper,
    Content,
    AboutUs,
    Contact,
    Wrapper,
    ContactList,
} from './styles'

const HomeComponent: NextPage = () => {
    return (
        <Layout>
            <Container>
                <Heading>
                    <ImageWrapper>
                        <Image
                            priority
                            src={
                                'https://www.datocms-assets.com/76746/1658242280-boxes.png'
                            }
                            layout="fill"
                            objectFit="cover"
                            alt="Mudança"
                        />
                    </ImageWrapper>
                    <Content>
                        <h1>Leleluia Transportes</h1>
                        <h2>Sempre ao seu dispor</h2>
                        <p>
                            Nossa equipe trabalha todos os dias para fornecer os
                            melhores serviços aos clientes. Personalizamos
                            nossas ofertas com base em necessidades específicas.
                            Entre em contato para receber um orçamento inicial.
                        </p>
                    </Content>
                </Heading>
                <AboutUs>
                    <h2>Um pouco sobre nós</h2>
                    <p>
                        Desde a inauguração, estamos empenhados em oferecer um
                        serviço de alta qualidade, prestando especial atenção à
                        eficiência, mantendo a comunicação com nossos clientes
                        clara e concisa. Nossa missão na Leleluia Transporte é
                        simples: fornecer serviços de alta qualidade em tempo
                        hábil. Nossa equipe atende às necessidades específicas
                        de cada cliente para garantir a excelência.
                    </p>
                    <Image
                        priority
                        src={
                            'https://www.datocms-assets.com/76746/1658242293-move.png'
                        }
                        layout="fill"
                        alt="Mudança"
                        objectFit="cover"
                    />
                </AboutUs>
                <Contact>
                    <ImageWrapper>
                        <Image
                            priority
                            src={
                                'https://www.datocms-assets.com/76746/1658242288-contact.png'
                            }
                            layout="fill"
                            objectFit="cover"
                            alt="Contato"
                        />
                    </ImageWrapper>
                    <Wrapper>
                        <h2>Foco na satisfação</h2>
                        <p>
                            Uma experiência de compras completa deve
                            possibilitar que o cliente possa acompanhar, receber
                            e ser encantado
                        </p>

                        <ContactList>
                            <span>
                                <a href="mailto:xandejapk@gmail.com">Contato</a>
                            </span>
                            <span>
                                <a href="https://api.whatsapp.com/send?phone=5511947414008">
                                    WhatsApp
                                </a>
                            </span>
                        </ContactList>
                    </Wrapper>
                </Contact>
            </Container>
        </Layout>
    )
}

export default HomeComponent
