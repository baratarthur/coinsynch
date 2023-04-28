import { AuthContextProvider } from '@/core/context/auth'
import { CoinContextProvider } from '@/core/context/coin'

import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <CoinContextProvider>
        <Component {...pageProps} />
      </CoinContextProvider>
    </AuthContextProvider>
  )
}
