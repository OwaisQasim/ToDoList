import { useState } from "react"
import List from '@mui/material/List';
import { TodoItem } from "./TodoItem";


const currentTodos = [
    { id: 1, text: 'Run the cat', completed: false },
    { id: 2, text: 'run the dog', completed: true },
    { id: 3, text: 'run the frog', completed: false },
    { id: 5, text: 'run the elephant', completed: true },
]
export const TodoList = () => {
    const [todos, setTodos] = useState(currentTodos)

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => {
                return <TodoItem key={todo.id} todo={todo} />
            })}
        </List>
    )
}




// export default function CheckboxList() {
//   const [checked, setChecked] = useState([0]);

//   const handleToggle = (value) => () => {
//     const currentIndex = checked.indexOf(value);
//     const newChecked = [...checked];

//     if (currentIndex === -1) {
//       newChecked.push(value);
//     } else {
//       newChecked.splice(currentIndex, 1);
//     }

//     setChecked(newChecked);
//   };


// }
