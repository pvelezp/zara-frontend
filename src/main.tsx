import { ApiProvider } from '@reduxjs/toolkit/dist/query/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { podcastApi } from './services/podcast'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <ApiProvider api={podcastApi}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </ApiProvider>
,
)
