import List from '@mui/material/List';
import Choice from './choice'



const Choices = ({ choices, onDelete, onEditChoice }) => {


    return (
        <List>
            {choices.map((choice, index) => {
                return (
                    <Choice
                        key={index}
                        choice={choice}
                        onEditChoice={onEditChoice}
                        onDelete={onDelete}
                    />
                )
            })}
        </List>
    )
}

export default Choices;