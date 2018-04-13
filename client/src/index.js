import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'mobx-react'
import mainStore from './stores/mainStores'
import authStore from './stores/authStores'

const stores = {
  mainStore,
  authStore
}

// For easier debugging
window._____APP_STATE_____ = stores

// promiseFinally.shim()
// useStrict(true)

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
, document.getElementById('root'))
registerServiceWorker()
