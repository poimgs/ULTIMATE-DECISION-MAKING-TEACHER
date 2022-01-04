import { useState } from "react";
import Container from "@mui/material/Container";
import Header from "./header";
import ChoiceInput from "./choiceInput";
import Choices from "./choices"
import ChooseButton from "./chooseButton";
import ChosenDecision from "./chosenDecision";
import YesNoButtons from "./yesNoButtons";

const MainPage = () => {
    const [inputValue, setInputValue] = useState("");
    const [choices, setChoices] = useState([]);
    const [choicesSeen, setChoicesSeen] = useState([]);
    const [choice, setChoice] = useState("");
    const [showYesNo, setShowYesNo] = useState(false);
    const [numClickYes, setNumClickYes] = useState(0);

    const handleResetButtonClick = () => {
        setChoices([]);
        setChoicesSeen([]);
        setChoice("");
        setShowYesNo(false);
        setNumClickYes(0);
    }

    const handleInputValueChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleInputEnter = (e) => {
        if (e.key === "Enter" && inputValue.length > 0) {
            const newChoices = choices.concat([inputValue]);
            setChoices(newChoices);
            setInputValue("");
            setChoice("");
        }
    }

    const handleEditChoiceChange = (e, index) => {
        const updatedChoices = choices.slice();
        updatedChoices[index] = e.target.value;

        setChoices(updatedChoices);
    }

    const handleDeleteChoice = (indexToDelete) => {
        const updatedChoices = choices.filter((choice, index) => {
            return index !== indexToDelete;
        })

        setChoices(updatedChoices);
        setChoicesSeen([]);
        setChoice("");
    }

    const handleChooseButtonClick = (e) => {
        const choicesSeenSet = new Set(choicesSeen);
        const updatedChoices = choices.filter((choice) => {
            return !choicesSeenSet.has(choice);
        })

        const newChoice = updatedChoices[Math.floor(Math.random() * updatedChoices.length)];
        const updatedChoicesSeen = choicesSeen.concat([newChoice]);

        if (choicesSeen.length >= choices.length - 1) {
            setChoicesSeen([newChoice]);
        } else {
            setChoicesSeen(updatedChoicesSeen);
        }

        setChoice(newChoice);
        setShowYesNo(true);
        setNumClickYes(0);
    }

    const handleYesButtonClick = (e) => {
        const capitalizedChoice = choice.toUpperCase() + "!!!";
        setChoice(capitalizedChoice);
        setNumClickYes(numClickYes + 1);
    }

    const handleNoButtonClick = (e) => {
        const newChoices = choices.slice()
        const indexOfchoice = newChoices.indexOf(choice);
        newChoices.splice(indexOfchoice, 1);
        setChoices(newChoices);

        const updatedChoice = "Yeah, screw that choice!";
        setChoice(updatedChoice);
        setShowYesNo(false);
    }

    return (
        <Container>
            <Header onResetButtonClick={handleResetButtonClick} />
            <ChoiceInput
                inputValue={inputValue}
                onChange={handleInputValueChange}
                onEnter={handleInputEnter}
            />
            <Choices choices={choices} onDelete={handleDeleteChoice} onEditChoice={handleEditChoiceChange} />
            <ChooseButton choices={choices} onClick={handleChooseButtonClick} />
            <ChosenDecision decision={choice} />
            <YesNoButtons
                decision={choice}
                show={showYesNo}
                numClickYes={numClickYes}
                onYesButtonClick={handleYesButtonClick}
                onNoButtonClick={handleNoButtonClick}
            />
        </Container>
    )
}

export default MainPage