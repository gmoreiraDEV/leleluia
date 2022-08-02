import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../theme/GlobalStyle'
import { Theme } from '../theme/Theme'
import 'react-toastify/dist/ReactToastify.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={Theme}>
            <Head>
                <link rel="shortcut icon" href="icon.png" type="image/png" />
                <title>Leleluia Transportes</title>
            </Head>
            <Component {...pageProps} />
            <GlobalStyle />
            <ToastContainer />
        </ThemeProvider>
    )
}

export default MyApp
