import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { Navbar } from './components/navbar/Navbar.jsx'
import { Header } from './components/header/Header.jsx'
import { Section } from './components/section/Section.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <Navbar />
      <Header />
      <App />
      <Section />
    </ChakraProvider>   
  </React.StrictMode>,
)
