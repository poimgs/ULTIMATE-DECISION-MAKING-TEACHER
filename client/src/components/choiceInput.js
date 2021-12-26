import TextField from '@mui/material/TextField';

const ChoiceInput = ({ inputValue, onChange, onEnter }) => {
    return (
        <TextField
            label="Choice"
            variant="outlined"
            fullWidth
            value={inputValue}
            helperText="Press Enter to Submit"
            onChange={(e) => onChange(e)}
            onKeyDown={(e) => onEnter(e)}
        />
    )
}

export default ChoiceInput;