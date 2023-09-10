import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { ConnectionProvider } from '@solana/wallet-adapter-react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { App } from './App'
import './styles.css'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <React.StrictMode>
    <ConnectionProvider endpoint={import.meta.env.GAMBA_SOLANA_RPC}>
      <BrowserRouter>
        <Theme accentColor="iris" radius="medium" panelBackground="translucent">
          <App />
        </Theme>
      </BrowserRouter>
    </ConnectionProvider>
  </React.StrictMode>,
)