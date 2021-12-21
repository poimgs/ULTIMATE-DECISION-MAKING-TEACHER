import Typography from '@mui/material/Typography';

const ChosenDecision = ({ decision }) => {
    if (decision) {
        return (
            <Typography variant="h2" align="center">
                {decision}
            </Typography>
        )
    } else {
        return null
    }
}

export default ChosenDecision;