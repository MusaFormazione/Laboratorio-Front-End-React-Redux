import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AdminProvider } from './UserContext.jsx';

import { store } from './store/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AdminProvider>
        <App />
      </AdminProvider>
    </Provider>
  </React.StrictMode>,
)
