import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// export react for remote components dynamic imports
window.React = React;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
