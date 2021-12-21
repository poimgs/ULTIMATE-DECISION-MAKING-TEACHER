import { useState } from "react";
import Container from "@mui/material/Container";
import Header from "./header";
import ChoiceInput from "./choiceInput";
import Choices from "./choices"
import ChooseButton from "./chooseButton";
import ChosenDecision from "./chosenDecision";

const MainPage = () => {
    const [inputValue, setInputValue] = useState("");
    const [choices, setChoices] = useState([]);
    const [chosen, setChoice] = useState("");

    const handleInputValueChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputEnter = (e) => {
        if (e.key === "Enter" && inputValue.length > 0) {
            const newChoices = choices.concat([inputValue]);
            setChoices(newChoices);
            setInputValue("");
        }
    }

    const handleDeleteChoice = (indexToDelete) => {
        const newChoices = choices.filter((choice, index) => {
            return index !== indexToDelete;
        })
        setChoices(newChoices);
    }

    const handleChooseButtonClick = (e) => {
        const choice = choices[Math.floor(Math.random() * choices.length)];
        setChoice(choice);
    }

    return (
        <Container>
            <Header />
            <ChoiceInput
                inputValue={inputValue}
                onChange={handleInputValueChange}
                onEnter={handleInputEnter}
            />
            <Choices choices={choices} onDelete={handleDeleteChoice} />
            <ChooseButton choices={choices} onClick={handleChooseButtonClick} />
            <ChosenDecision decision={chosen} />
        </Container>
    )
}

export default MainPage