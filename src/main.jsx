import React from 'react'
import ReactDOM from 'react-dom/client'

// redux/global state
import { Provider } from 'react-redux'
import store from './redux/store.redux.js'

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
