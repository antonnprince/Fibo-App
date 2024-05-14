import React from 'react'
import Page1 from './Page1'
import Page2 from "./Page2.jsx"
import Page3 from './Page3.jsx'
import Page4 from "./Page4.jsx"
import Nav from './Nav'
import {BrowserRouter, Routes,Route} from "react-router-dom"

const App = () => {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1/>}>
              <Route index element={<Page1/>}/>
              <Route path='page2' element={<Page2/>}/>
              <Route path='page3' element={<Page3/>}/>
              <Route path='page4' element={<Page4/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
  )
}

export default App