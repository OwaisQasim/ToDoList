import { useState } from "react"
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';


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
                const labelId = `checkbox-list-label-${todo.id}`
                return <ListItem
                    key={todo.id}
                    secondaryAction={
                        <IconButton edge="end" aria-label="comments">
                            <CommentIcon />
                        </IconButton>
                    }
                    disablePadding
                >
                    <ListItemButton role={undefined}
                        dense
                    >
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={todo.completed}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={todo.text} />
                    </ListItemButton>
                </ListItem>
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
