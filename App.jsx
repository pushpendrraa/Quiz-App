import React from 'react'
import Quiz from './assets/Quiz'
import Quizdata from './assets/Quizdata'

function App() {
  return (
    <Quiz questions={Quizdata} />
  )
}

export default App