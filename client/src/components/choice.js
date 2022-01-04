import { useState } from "react";
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const Choice = ({ choice, index, onEditChoice, onDelete }) => {
    const [editing, setEditing] = useState(false);

    const handleEnter = (e) => {
        if (e.key === "Enter" && choice.length > 0) {
            setEditing(false);
        }
    }

    if (editing) {
        return (
            <ListItem>
                <TextField
                    variant="standard"
                    value={choice}
                    placeholder="Don't leave me empty!"
                    helperText="Press Enter to Edit Choice"
                    fullWidth
                    inputProps={{ style: { fontSize: '2rem' } }}
                    onChange={(e) => onEditChoice(e, index)}
                    onKeyDown={(e) => handleEnter(e)}
                />
            </ListItem>
        )
    } else {
        return (
            <ListItem>
                <ListItemText
                    primary={choice}
                    primaryTypographyProps={{
                        variant: "h4",
                    }}
                />
                <IconButton onClick={() => setEditing(true)}>
                    <EditIcon />
                </IconButton>
                <IconButton onClick={() => onDelete(index)}>
                    <DeleteIcon />
                </IconButton>
            </ListItem>
        )
    }
}

export default Choice;