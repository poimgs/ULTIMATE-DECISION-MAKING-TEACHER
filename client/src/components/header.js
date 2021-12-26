import { useState } from "react";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import TextField from '@mui/material/TextField';

const Header = () => {
    const [header, setHeader] = useState("What do I want?")
    const [editing, setEditing] = useState(false);

    const handleClick = () => {
        setHeader("");
        setEditing(true);
    }

    const handleChange = (e) => {
        setHeader(e.target.value);
    }

    const handleEnter = (e) => {
        if (e.key === "Enter" && header.length > 0) {
            setEditing(false);
        }
    }

    if (editing) {
        return (
            <TextField
                variant="outlined"
                align="center"
                value={header}
                placeholder="What does [your name] want?"
                helperText="Press Enter to change question"
                fullWidth
                inputProps={{ style: { textAlign: 'center', fontSize: '3.4rem' } }}
                onChange={(e) => handleChange(e)}
                onKeyDown={(e) => handleEnter(e)}
            />
        )
    } else {
        return (
            <Typography
                variant="h2"
                align="center"
                gutterBottom
            >
                {header}
                <IconButton>
                    <EditIcon
                        fontSize="large"
                        onClick={() => handleClick()}
                    />
                </IconButton>
            </Typography>
        )
    }

}

export default Header;