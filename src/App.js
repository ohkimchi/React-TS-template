/* global GLOBAL_CONFIG */

import React, { useReducer } from 'react'
import './App.css'
import { AppContext, AppReducer, initialState } from './AppReducer'

const App = () => {
  console.log(GLOBAL_CONFIG)
  const [state, dispatch] = useReducer(AppReducer, initialState)
  return (
    <AppContext.Provider value={ { state, dispatch } }>
      <div className='App'>
      </div>
    </AppContext.Provider>

  )
}

export default App
