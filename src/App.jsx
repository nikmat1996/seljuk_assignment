import { useState } from 'react'
import './App.css'
import ButtonPrimary from './components/ButtonPrimary'
import ButtonGradient from './components/ButtonGradient'
import Form from './components/Form'
import Blog from './components/Blog'

function App() {

  return (
    <div className='container'>
      <ButtonPrimary>BOOK NOW</ButtonPrimary>
      <ButtonGradient>BOOK NOW</ButtonGradient>
      <Form />
      <Blog />
    </div>
  )
}

export default App
