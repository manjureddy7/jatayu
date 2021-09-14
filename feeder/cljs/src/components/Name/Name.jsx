import React from 'react';
import Container from './StyledName';


/**
* Name Component provides nice UI with name,company props provided.
*/
const Name = ({ name = 'MR', company = '7', experience }) => {
    return (
        <Container>
            <p>Hola! I'm {name}</p>
            <p>I work at {company} </p>
            {
                experience && 
                <p>I'm with {experience} yoe.</p>
            }
        </Container>
    )
}

export default Name;