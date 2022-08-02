import styled from 'styled-components'
import { isTablet } from '../../constants'

export const Container = styled.div`
    width: 100%;
    height: 100%;

    header {
        display: flex;

        nav {
            display: flex;
        }
    }
`

export const Heading = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    position: relative;

    @media screen and (max-width: ${isTablet}) {
        flex-direction: column-reverse;
    }
`

export const ImageWrapper = styled.div`
    position: relative;
    width: 50%;
    min-height: 400px;
    background-color: ${(props) => props.theme.colors.gray.regular};

    span {
        border-radius: 0 ${(props) => props.theme.size.m}px
            ${(props) => props.theme.size.m}px 0;
    }

    @media screen and (max-width: ${isTablet}) {
        width: 100%;

        span {
            border-radius: 0;
        }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    color: ${(props) => props.theme.colors.white.regular};
    background-color: ${(props) => props.theme.colors.gray.regular};
    padding: ${(props) => props.theme.size.xxg}px;

    h1,
    h2 {
        text-transform: uppercase;
        text-align: left;
        width: 50%;
        color: ${(props) => props.theme.colors.white.light};
    }

    h1 {
        font-weight: 900;
    }

    h2 {
        margin-bottom: ${(props) => props.theme.size.xxg}px;
    }

    p {
        width: 50%;
        text-align: left;
        color: ${(props) => props.theme.colors.white.light};
    }

    @media screen and (max-width: ${isTablet}) {
        width: 100%;

        span {
            border-radius: 0;
        }

        h1,
        h2,
        p {
            width: 100%;
            text-align: center;
        }
    }
`

export const AboutUs = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: ${(props) => props.theme.size.xxg}px;
    padding: ${(props) => props.theme.size.xxg}px;
    width: 100%;
    height: 400px;
    text-align: center;
    color: ${(props) => props.theme.colors.white.regular};

    h2 {
        text-transform: uppercase;
        font-weight: 900;
        z-index: 10;
        color: ${(props) => props.theme.colors.white.light};
    }

    p {
        width: 50%;
        z-index: 10;
        font-size: ${(props) => props.theme.size.m}px;
        color: ${(props) => props.theme.colors.white.light};
    }

    &:after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: ${(props) => props.theme.colors.gray.dark};
        opacity: 0.7;
        z-index: 1;
    }

    @media screen and (max-width: ${isTablet}) {
        width: 100%;

        h1,
        h2,
        p {
            width: 100%;
            text-align: center;
        }
    }
`

export const Contact = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${(props) => props.theme.size.xxg}px;
    background-color: ${(props) => props.theme.colors.white.regular};

    ${ImageWrapper} {
        background-color: transparent;
        span {
            border-radius: ${(props) => props.theme.size.m}px 0 0
                ${(props) => props.theme.size.m}px;
        }
    }

    @media screen and (max-width: ${isTablet}) {
        width: 100%;
        flex-direction: column;
        padding: 0;

        ${ImageWrapper} {
            min-height: 150px;

            span {
                max-height: 100%;
                border-radius: 0;
            }
        }
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 400px;
    height: 400px;
    gap: ${(props) => props.theme.size.xxg}px;
    padding: ${(props) => props.theme.size.xxg}px;
    border-radius: 0 ${(props) => props.theme.size.m}px
        ${(props) => props.theme.size.m}px 0;
    color: ${(props) => props.theme.colors.white.light};
    background-color: ${(props) => props.theme.colors.gray.regular};

    h2 {
        width: 100%;
        text-align: left;
        color: ${(props) => props.theme.colors.white.light};
    }
    p {
        color: ${(props) => props.theme.colors.white.light};
    }

    @media screen and (max-width: ${isTablet}) {
        flex: 1;
        width: 100%;
        flex-direction: column;
        border-radius: 0;

        h2,
        p {
            text-align: center;
        }
    }
`
export const ContactList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${(props) => props.theme.size.g}px;

    span {
        background-color: ${(props) => props.theme.colors.red.light};
        background: linear-gradient(
            0deg,
            ${(props) => props.theme.colors.red.light} 0%,
            ${(props) => props.theme.colors.red.regular} 100%
        );
        border-radius: ${(props) => props.theme.size.sm / 2}px;
        padding: ${(props) => props.theme.size.g}px
            ${(props) => props.theme.size.lg}px;

        a {
            color: ${(props) => props.theme.colors.white.light};
            text-decoration: none;
        }

        &:hover {
            background-color: ${(props) => props.theme.colors.red.regular};
            background: linear-gradient(
                0deg,
                ${(props) => props.theme.colors.red.regular} 0%,
                ${(props) => props.theme.colors.red.light} 100%
            );
        }

        &:focus,
        &:focus-visible,
        &:focus-within {
            outline: none;
            outline: 2px solid ${(props) => props.theme.colors.gray.dark};

            a {
                outline: none;
            }
        }
    }

    @media screen and (max-width: ${isTablet}) {
        width: 100%;
        flex-direction: column;
    }
`
