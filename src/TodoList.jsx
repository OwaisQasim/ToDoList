import { useEffect, useState } from "react"
import List from '@mui/material/List';
import { TodoItem } from "./TodoItem";
import TodoForm from './TodoForm';
import { Box } from "@mui/material";
import Typography from '@mui/material/Typography';



const getInitialData = () => {
    const data = JSON.parse(localStorage.getItem('todos'))
    if (!data) return []
    return data;
}



export const TodoList = () => {
    const [todos, setTodos] = useState(getInitialData)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

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
            return [...prevText, { text: text, id: new Date().getTime(), completed: false }]
        })
    }

    return (
        <Box sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            mt: 5,
            flexDirection: 'column'
        }}>
            <Typography variant="h2" component="h2">Todos</Typography>
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
        </Box>
    )
}




