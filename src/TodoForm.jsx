import { Box, List } from '@mui/material'
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import Create from "@mui/icons-material/Create"
import { InputAdornment } from "@mui/material"
import { IconButton } from "@mui/material"


const TodoForm = ({ addTodo }) => {
    const [text, setText] = useState('')
    const handleChange = (evnt) => {
        setText(evnt.target.value)
    }

    const handleSubmit = (evnt) => {
        evnt.preventDefault()
        addTodo(text)
        setText('')
    }

    return (
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            mt: 3
        }}>
            <List>
                <form onSubmit={handleSubmit}>
                    <TextField id="outlined-basic"
                        value={text}
                        label="Add Todo"
                        variant="outlined"
                        onChange={handleChange}
                        InputProps={{
                            endAdornment:
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="create todo"
                                        edge="end"
                                        type='submit'
                                    >
                                        <Create />
                                    </IconButton>
                                </InputAdornment>
                        }}

                    />
                </form>

            </List>
        </Box>
    )
}

export default TodoForm

