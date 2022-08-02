import styled from 'styled-components'
import { IconProps, Package, Smiley, Truck } from 'phosphor-react'
import { Status } from '../../../types/api/invoice'
import { lighten } from 'polished'
import { isTablet } from '../../constants'

interface Steps {
    progress?: string
}

interface IIndicatorProps {
    position: string
}

interface IIcons {
    active: boolean
}

interface IIconBox {
    active: boolean
    alreadyPassed: boolean
}

export const Container = styled.div`
    width: 100%;
    z-index: 0;
`

export const Steps = styled.div<Steps>`
    width: 100%;
    position: relative;
    z-index: 99;
`

export const IndicatorLine = styled.div<IIndicatorProps>`
    height: 5px;
    width: 90%;
    background-color: ${(props) => props.theme.colors.gray.light};
    border-radius: 5px;
    position: absolute;
    bottom: calc(50% + ${(props) => props.theme.size.m}px);
    left: 5%;
    right: 5%;
    overflow: hidden;
    margin: 0 auto;
    z-index: 1;

    &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${(props) =>
            props.position === Status.ON_SEPARATION
                ? '0'
                : props.position === Status.ON_TRANSIT
                ? '50%'
                : '100%'};
        height: 100%;
        background-color: ${(props) => props.theme.colors.green};
    }

    @media screen and (max-width: ${isTablet}) {
        width: 60%;
        text-align: center;
    }
`

export const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${(props) => props.theme.size.g}px 0;
    z-index: 99;
`

export const IconWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 99;

    p {
        height: 16px;
        width: 100%;
        display: flex;
    }

    @media screen and (max-width: ${isTablet}) {
        width: 50%;
        text-align: center;
    }
`

export const IconBox = styled.div<IIconBox>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    background: ${(props) =>
        props.active
            ? props.theme.colors.gray.regular
            : props.theme.colors.white.regular};
    background: ${(props) =>
        props.alreadyPassed ? props.theme.colors.green : ''};
    box-shadow: ${(props) => props.theme.shadow.md};
    border-radius: 50%;
    margin-bottom: ${(props) => props.theme.size.g}px;
`

export const SeparationIcon = styled(Package).attrs<IIcons>((props) => {
    return {
        weight: props.active ? 'fill' : 'regular',
    }
})<IIcons>`
    color: ${(props) =>
        props.active
            ? props.theme.colors.white.light
            : props.theme.colors.gray.light};
`

export const TransitIcon = styled(Truck).attrs<IIcons>((props) => {
    return {
        weight: props.active ? 'fill' : 'regular',
    }
})<IIcons>`
    color: ${(props) =>
        props.active
            ? props.theme.colors.white.light
            : props.theme.colors.gray.light};
`

export const FinishIcon = styled(Smiley).attrs<IIcons>((props) => {
    return {
        weight: props.active ? 'fill' : 'regular',
    }
})<IIcons>`
    color: ${(props) =>
        props.active
            ? props.theme.colors.white.light
            : props.theme.colors.gray.light};
`
export const Spacer = styled.div`
    height: 16px;
    background: transparent;
    width: 100%;
    display: flex;
`
