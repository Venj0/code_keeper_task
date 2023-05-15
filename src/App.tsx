import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RouterConfig } from './configs/routerConfig'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {RouterConfig.map(({ key, ...route }) => (
          <Route key={key} {...route} />
        ))}
      </Routes>
    </BrowserRouter>
  )
}

export default App
