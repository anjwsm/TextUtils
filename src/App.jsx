import './App.css'
import HomePage from './components/HomePage/HomePage'
import { Navbar } from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar  title="TextUtlis"  about="About Us"/>
      <HomePage />
    </>
  )
}

export default App
