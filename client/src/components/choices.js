import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

const Choices = ({ choices, onDelete }) => {

    return (
        <List>
            {choices.map((choice, index) => {
                return (
                    <ListItem key={index}>
                        <ListItemText
                            primary={choice}
                            primaryTypographyProps={{
                                variant: "h4",
                            }}
                        />
                        <IconButton onClick={() => onDelete(index)}>
                            <DeleteIcon />
                        </IconButton>
                    </ListItem>
                )
            })}
        </List>
    )
}

export default Choices;