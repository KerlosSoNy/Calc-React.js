import React from 'react'
import ReactDom from 'react-dom/client'
import Calc from './Component/App'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

const root = ReactDom.createRoot(document.querySelector('#root'))
root.render(
    <React.StrictMode>
       <Calc/>
    </React.StrictMode>
)
