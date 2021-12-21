import Button from '@mui/material/Button';

const ChooseButton = ({ choices, onClick }) => {
    return (
        <Button
            variant="contained"
            fullWidth
            disabled={choices.length < 2}
            onClick={(e) => onClick(e)}
        >
            {choices.length < 2 ? "Write more choices!" : "Make a choice!"}
        </Button>
    )
}

export default ChooseButton;