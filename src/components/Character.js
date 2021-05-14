// Write your Character component here
import React from 'react';
import styled from "styled-components"

const StyledCharacter = styled.div`
    background-color: lightskyblue;
    border-radius: 30px;
    border: 2px solid black;
    width: 50%;
    margin: 2% auto;
`;

const Character = (props) => {
    
    const { character } = props;
    console.log(character)

    return (
        <StyledCharacter>
            <h3>Name: {character.name}</h3>
            <h4>Height: {character.height}</h4>
            <h4>Mass: {character.mass}</h4>
            <h4>Skin color: {character.skin_color}</h4>
            <h4>Eye color: {character.eye_color}</h4>
        </StyledCharacter>
    ) 
    
}

export default Character;

