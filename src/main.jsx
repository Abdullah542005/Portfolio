import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from "react-redux"
import App from './App.jsx'
import './index.css'
import { Store } from "./Redux/Store.js"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={Store} >
       <App />
    </Provider>
  </React.StrictMode>,
)
