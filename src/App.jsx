
import './App.css'
import Counter from './components/Counter'
import Exam1 from './components/Exam1'
import Exam2 from './components/Exam2'
import Exam3 from './components/Exam3'

function App() {

  const user = {
    name: 'Alice',
    age: 21
  }

  return (
    <div>
      <Exam3 />
      <Exam2 />
      <Exam1 {...user} />
      <main>
        <h1>hello react!</h1>
        <Counter />
      </main>
    </div>
  )
}

export default App
