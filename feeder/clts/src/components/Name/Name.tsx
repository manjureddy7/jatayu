import React from 'react';
import { Button } from '@material-ui/core';

import { NameProps } from './Name.types';
import { StyledName, StyledButton } from './StyledName';

const Name = ({ name = 'MR.', isWorking = false, backgroundColor = '#fff' }: NameProps): JSX.Element => (
    <div>
        <StyledName>
            <h1>Hola! I`m {name}</h1>
            <div style={{ backgroundColor }}>
                {isWorking ? <h2>I work at everywhere</h2> : <h2> I`m free</h2> }
            </div>
        </StyledName>
        <Button>Material UI Button</Button>
        <StyledButton>Styled Button</StyledButton>
    </div>
);

export default Name;
