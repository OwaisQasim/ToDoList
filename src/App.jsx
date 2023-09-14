import CssBaseLine from '@mui/material/CssBaseLine'
import './App.css'
import { TodoList } from './TodoList'

function App() {

  return (
    <>
      <CssBaseLine />
      <h1>Todos</h1>
      <TodoList />
    </>
  )
}

export default App
