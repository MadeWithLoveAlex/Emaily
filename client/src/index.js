import 'materialize-css/dist/css/materialize.min.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import App from './components/App'
import authReducer from './reducers/authSlice'

const store = configureStore({
    reducer: {
        auth: authReducer
    }
})

ReactDOM.render(<Provider store={store}><App /></Provider>, document.querySelector('#root'))