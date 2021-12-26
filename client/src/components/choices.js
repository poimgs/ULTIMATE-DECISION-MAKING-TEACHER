import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Choice from './choice'



const Choices = ({ choices, onDelete, onEditChoice }) => {


    return (
        <List>
            {choices.map((choice, index) => {
                return (
                    <Choice
                        choice={choice}
                        index={index}
                        onEditChoice={onEditChoice}
                        onDelete={onDelete}
                    />
                )
            })}
        </List>
    )
}

export default Choices;