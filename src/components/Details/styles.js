import styled from 'styled-components'
import { darken } from 'polished'
import { isTablet } from '../../constants'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media screen and (max-width: ${isTablet}) {
        height: auto;
        margin: ${(props) => props.theme.size.g}px 0;
    }
`
export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media screen and (max-width: ${isTablet}) {
        height: auto;
        margin: ${(props) => props.theme.size.g}px 0;
    }
`
export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    gap: ${(props) => props.theme.size.xxg}px;
    padding: ${(props) => props.theme.size.m}px;

    @media screen and (max-width: ${isTablet}) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        gap: ${(props) => props.theme.size.g}px;
    }
`
export const Content = styled.div`
    width: 100%;

    hr {
        background-color: ${(props) => props.theme.colors.gray.dark};
        border-color: ${(props) => props.theme.colors.gray.dark};
        border-width: 2px;
        margin: ${(props) => props.theme.size.sm}px 0;
    }

    table {
        width: 100%;

        thead {
            tr {
                background-color: ${(props) => props.theme.colors.gray.dark};
                color: ${(props) => props.theme.colors.white.regular};

                th {
                    padding: ${(props) => props.theme.size.sm}px 0;
                }
            }
        }
        tbody {
            tr {
                color: ${(props) => props.theme.colors.gray.dark};

                td {
                    padding: ${(props) => props.theme.size.sm}px 0;
                    text-align: center;
                }

                &:nth-child(odd) {
                    background-color: ${(props) =>
                        props.theme.colors.gray.light};
                }
                &:nth-child(even) {
                    background-color: ${(props) =>
                        darken(0.2, props.theme.colors.gray.light)};
                }
            }
        }
    }
`
