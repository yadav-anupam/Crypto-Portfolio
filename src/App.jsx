import React from 'react'
import Header from './components/header'
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <>
      <Header/>
      <main>
        <Outlet/>
      </main>
    </>
  )
}

export default App
