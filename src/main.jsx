import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './App.css'

const GA_MEASUREMENT_ID = 'G-Y0HM6WTX34'  // seu ID do GA4

function loadGAScript() {
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
  script.async = true
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag(){window.dataLayer.push(arguments)}
  gtag('js', new Date())
  gtag('config', GA_MEASUREMENT_ID)
}

loadGAScript()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
