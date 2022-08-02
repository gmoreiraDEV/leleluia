import styled from 'styled-components'
import { isTablet } from '../../constants'

interface WrapperProps {
    image?: string
}

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    @media screen and (max-width: ${isTablet}) {
        height: auto;
    }
`

export const Wrapper = styled.div<WrapperProps>`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    gap: ${(props) => props.theme.size.xxg}px;
    color: ${(props) => props.theme.colors.gray.dark};

    background-image: url(${(props) => props.image});
    background-size: cover;
    background-repeat: no-repeat;

    h1 {
        text-transform: uppercase;
        font-weight: 900;
        z-index: 10;
    }

    form {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 10;

        label {
            padding: ${(props) => props.theme.size.g}px
                ${(props) => props.theme.size.lg}px;
            font-size: ${(props) => props.theme.size.m}px;
        }

        input {
            width: 100%;
            height: 30px;
            border: none;
            color: ${(props) => props.theme.colors.white.light};
            background-color: ${(props) => props.theme.colors.gray.dark};
            padding: ${(props) => props.theme.size.sm}px;
            margin-bottom: ${(props) => props.theme.size.sm}px;
            border-radius: ${(props) => props.theme.size.sm / 2}px;

            &:focus,
            &:focus-visible {
                outline: 2px solid ${(props) => props.theme.colors.red.light};
                outline-offset: 2px;
            }
        }

        button {
            width: 100%;
            height: 30px;
            border: none;
            border-radius: ${(props) => props.theme.size.sm / 2}px;
            margin-top: ${(props) => props.theme.size.sm}px;
            color: ${(props) => props.theme.colors.white.light};
            background-color: ${(props) => props.theme.colors.red.light};
            background: linear-gradient(
                0deg,
                ${(props) => props.theme.colors.red.light} 0%,
                ${(props) => props.theme.colors.red.regular} 100%
            );

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
                outline: 2px solid ${(props) => props.theme.colors.red.light};
                outline-offset: 2px;
            }
        }

        span {
            color: ${(props) => props.theme.colors.red.light};
            font-size: small;
        }
    }

    &:after {
        content: '';
        width: 50%;
        height: 50%;
        position: absolute;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: ${(props) => props.theme.colors.white.light};
        border-radius: ${(props) => props.theme.size.m}px;
        opacity: 0.5;
        z-index: 1;
    }

    @media screen and (max-width: ${isTablet}) {
        height: 100vh;

        form {
            input {
                width: 80%;
            }
            button {
                width: 80%;
            }
        }

        &:after {
            width: 100%;
            border-radius: 0;
        }
    }
`
