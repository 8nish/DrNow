import { Router } from 'express'
import React from 'react'
import { Home } from './pages/Home'


export const App = () => {
  return (
    <div classname="mx-4 sm:mx-[10%]">  
      <Routes>

        <Route path="/" element={<Home />} />
      </Routes>

    </div>
    
  )
}

export default App