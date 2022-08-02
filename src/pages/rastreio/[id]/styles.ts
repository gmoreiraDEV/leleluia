import styled from 'styled-components'
import { isTablet } from '../../../constants'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: ${(props) => props.theme.colors.white.light};

    @media screen and (max-width: ${isTablet}) {
        width: 100%;
        margin-top: ${(props) => props.theme.size.m}px;
        height: auto;
    }
`

export const Wrapper = styled.div`
    width: 70%;
    margin: 0 auto;
    padding: ${(props) => props.theme.size.lg}px 0;

    hr {
        background-color: ${(props) => props.theme.colors.gray.dark};
        border-color: ${(props) => props.theme.colors.gray.dark};
        border-width: 2px;
        margin: ${(props) => props.theme.size.sm}px 0;
    }

    @media screen and (max-width: ${isTablet}) {
        width: 90%;
        padding: 0;
        margin-top: ${(props) => props.theme.size.sm}px;
    }
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
        flex: 1;
    }

    @media screen and (max-width: ${isTablet}) {
        width: 100%;
    }
`

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${(props) => props.theme.size.sm}px
        ${(props) => props.theme.size.g}px;
    background-color: ${(props) => props.theme.colors.gray.dark};
    color: ${(props) => props.theme.colors.white.light};
    cursor: pointer;
    border: none;

    &:hover {
        background-color: ${(props) => props.theme.colors.red.regular};
    }
`
