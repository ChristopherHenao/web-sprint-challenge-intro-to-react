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
            <h4>Birth Year: {character.birth_year}</h4>
            <h4>Height: {character.height}</h4>
            <h4>Mass: {character.mass}</h4>
            <h4>Skin Color: {character.skin_color}</h4>
        </StyledChararacter>
    )
}

export default Character