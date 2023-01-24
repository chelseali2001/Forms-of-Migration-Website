import React from 'react'
import ReactDOM from 'react-dom/client';
import './index.css'

const element =
  React.createElement('h1', null, "Hello world!");

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(element)
