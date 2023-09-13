import GlobalStyles from '@/styles/GlobalStyles'
import type { AppProps } from 'next/app'
import './../styles/readerStyle.css'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
