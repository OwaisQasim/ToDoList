import { useState } from "react"
import List from '@mui/material/List';
import { TodoItem } from "./TodoItem";
import TodoForm from './TodoForm';

const currentTodos = [
    { id: 1, text: 'Run the cat', completed: false },
    { id: 2, text: 'run the dog', completed: true },
    { id: 3, text: 'run the frog', completed: false },
    { id: 5, text: 'run the elephant', completed: true },
]



export const TodoList = () => {
    const [todos, setTodos] = useState(currentTodos)

    const removeTodo = (id) => {
        setTodos(prevTodo => {
            return prevTodo.filter(t => t.id !== id)
        })
    }

    const toggleTodo = (id) => {
        setTodos(prevTodo => {
            return prevTodo.map(todo => {
                if (todo.id === id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo
                }
            })
        })
    }

    const addTodo = (text) => {
        setTodos(prevText => {
            return [...prevText, { text: text, id: 8, completed: false }]
        })
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={() => removeTodo(todo.id)}
                    toggle={() => toggleTodo(todo.id)}
                />
            ))}
            <TodoForm addTodo={addTodo} />
        </List>
    )
}




