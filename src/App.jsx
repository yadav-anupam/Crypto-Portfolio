import React from 'react'
import Header from './components/header'
import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'

function App() {
  return (
    <div className='min-h-screen min-w-full flex flex-wrap content-between bg-gray-400'>
      <div className='w-full'>
      <Header/>
      < main>
        <Outlet/>
      </main>
      <Footer/>
      </div>
    </div>
  )
}

export default App
