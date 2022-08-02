import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`
export const Wrapper = styled.div`
    width: 100%;
`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: ${(props) => props.theme.size.m}px;
    background-color: ${(props) => props.theme.colors.gray.dark};
`

export const ImageWrapper = styled.div`
    flex: 1;
`

export const Navigation = styled.nav`
    display: flex;
    gap: ${(props) => props.theme.size.m}px;

    a {
        text-decoration: none;
        text-transform: uppercase;
        font-weight: bold;
        color: ${(props) => props.theme.colors.white.light};

        &:hover {
            color: ${(props) => props.theme.colors.red.light};
        }
    }
`

export const Footer = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90px;
    width: 100%;
    text-align: center;
    font-weight: 900;
    color: ${(props) => props.theme.colors.white.regular};
    background-color: ${(props) => props.theme.colors.gray.dark};
    padding: ${(props) => props.theme.size.m}px;
`
