import React from 'react'
import {useContext} from './context'
import Content from './context-content'

function App() {
  return (
    <useContext.Provider value={'Tom Jerry'}>
    <Content/>
    </useContext.Provider>
  )
}

export default App;