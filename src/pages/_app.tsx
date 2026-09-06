import { ThemeProvider } from 'styled-components'
import Head from 'next/head'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import AppBar from 'components/Appbar'
import { Container } from '@mui/material'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Yan</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJS and Styled Components"
        />
      </Head>
      <GlobalStyles />
      <AppBar />
      <Container maxWidth="sm" sx={{ marginTop: '5rem' }}>
        <Component {...pageProps} />
      </Container>
    </ThemeProvider>
  )
}

export default MyApp
