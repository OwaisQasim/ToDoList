import { useState } from "react"


const currentTodos = [
    { id: 1, text: 'Run the cat', completed: false },
    { id: 2, text: 'run the dog', completed: true },
    { id: 3, text: 'run the frog', completed: false },
    { id: 5, text: 'run the elephant', completed: false },
]
export const TodoList = () => {
    const [todos, setTodos] = useState(currentTodos)

    return (
        <div>
            <ul>
                {todos.map(todo => {
                    return <li key={todo.id}>
                        {todo.text} {todo.completed ? "✓" : "✗"}
                    </li>
                })}
            </ul>
        </div>
    )
}
