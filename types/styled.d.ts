// styled.d.ts
import 'styled-components'

interface IColors {
    red: {
        regular: string
        light: string
    }
    gray: {
        light: string
        regular: string
        dark: string
    }
    white: {
        regular: string
        light: string
    }
    green: string
}

interface ISize {
    sm: number
    m: number
    g: number
    lg: number
    xxg: number
}

interface ITransition {
    easeInOut: string
}

interface IShadow {
    md: string
}

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: IColors
        size: ISize
        transition: ITransition
        shadow: IShadow
    }
}
