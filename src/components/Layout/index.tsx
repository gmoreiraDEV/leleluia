import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import {
    Container,
    Wrapper,
    Header,
    ImageWrapper,
    Navigation,
    Footer,
} from './styles'

type Props = {
    children: JSX.Element
}

const Layout = ({ children }: Props) => {
    const date = new Date()
    const year = date.getFullYear()
    return (
        <Container>
            <Header>
                <ImageWrapper>
                    <Image
                        src={'/icon.png'}
                        alt="Leleluia Transportes"
                        width={50}
                        height={50}
                    />
                </ImageWrapper>
                <Navigation>
                    <Link href="/">
                        <a>Início</a>
                    </Link>
                    <Link href="/rastreio">
                        <a>Rastreio</a>
                    </Link>
                </Navigation>
            </Header>
            <Wrapper>{children}</Wrapper>
            <Footer>© {year} por Leleluia Transportes</Footer>
        </Container>
    )
}

export default Layout
