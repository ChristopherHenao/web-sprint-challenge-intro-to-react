// Write your Character component here
import React from 'react'
import Styled from 'styled-components'

const StyledChararacter = Styled.div`
    border: 8px solid white;
    border-radius: 30px;
    width: 40%;
    margin: 2% auto;


`



const Character = (props) => {

    const { character } = props

    

    return (
        <StyledChararacter>
            <h2>{character.name}</h2>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Skin Color: {character.skin_color}</p>
        </StyledChararacter>
    )
}

export default Character