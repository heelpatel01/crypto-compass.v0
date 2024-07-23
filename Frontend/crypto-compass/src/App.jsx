import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import VericalTabs from './components/VerticalTabs'

function App() {
  const [count, setCount] = useState(0)

  const tabLabels = ["Item One", "Item Two", "Item Three", "Item Four", "Item Five", "Item Six", "Item Seven"];
  const tabContents = [
    <div>Content for Item One</div>,
    <div>Content for Item Two</div>,
    <div>Content for Item Three</div>,
    <div>Content for Item Four</div>,
    <div>Content for Item Five</div>,
    <div>Content for Item Six</div>,
    <div>Content for Item Seven</div>,
  ];


  return (
    <>
      <Navbar/>
      <VericalTabs tabLabels={tabLabels} tabContents={tabContents}/>
      <h1>Jay Shree Krishna</h1>
    </>
  )
}

export default App
