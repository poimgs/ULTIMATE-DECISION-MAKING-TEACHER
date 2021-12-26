import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

const YesNoButtons = ({ decision, show, numClickYes, onYesButtonClick, onNoButtonClick }) => {

    if (decision && show) {
        return (
            <Container align="center" sx={{ "& button": { m: 2 } }}>
                <Button
                    variant="outlined"
                    color="success"
                    onClick={() => { onYesButtonClick() }}
                >
                    {"YESSSSSSS" + "!!!".repeat(numClickYes)}
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={() => { onNoButtonClick() }}
                >
                    NOOOOOOOO
                </Button>
            </Container>
        )
    }
    return null;
}

export default YesNoButtons;
