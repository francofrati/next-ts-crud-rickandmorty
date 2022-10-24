import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Transition from './components/transition'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Transition>
      <Component {...pageProps} />

    </Transition>
      )
}

export default MyApp
