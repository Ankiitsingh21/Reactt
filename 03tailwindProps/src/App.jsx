import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'



function App() {

  let myObj={
    username:"Ankit Singh",
    age:21
  }

  let newArr=[1,2,3]
  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-xl' >Tail wind Test</h1>
      <Card channel="Hello world" someObj={newArr  }/>
      <Card/>
      <Card/>
    </>
  )
}

export default App
