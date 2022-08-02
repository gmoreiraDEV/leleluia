import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    p {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: ${(props) => props.theme.size.m}px;
    }
`
