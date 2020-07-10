import React from 'react'
import Header from './Header'

const App = ({ children }) => (
  <main>
    <Header pathname />
    {children}
  </main>
)

export default App
