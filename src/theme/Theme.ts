import { DefaultTheme } from 'styled-components'

export const Theme: DefaultTheme = {
    colors: {
        red: {
            regular: '#96281B',
            light: '#B50000',
        },
        gray: {
            light: '#bababa',
            regular: '#434343',
            dark: '#302d2d',
        },
        white: {
            regular: '#EEEBEB',
            light: '#FAFAFA',
        },
        green: '#63A355',
    },

    size: {
        sm: 8,
        m: 16,
        g: 24,
        lg: 32,
        xxg: 40,
    },

    transition: {
        easeInOut: 'all 0.3s 0s ease-in-out',
    },
    shadow: {
        md: '0px 0px 11px -2px rgba(48, 45, 45, 0.7)',
    },
}
