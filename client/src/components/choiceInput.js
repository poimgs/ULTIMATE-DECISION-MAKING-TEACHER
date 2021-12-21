import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';

const ChoiceInput = ({ inputValue, onChange, onEnter }) => {
    return (
        <Container>
            <TextField
                label="Choice"
                variant="outlined"
                fullWidth
                value={inputValue}
                onChange={(e) => onChange(e)}
                onKeyDown={(e) => onEnter(e)}
            />
        </Container >
    )
}

export default ChoiceInput;