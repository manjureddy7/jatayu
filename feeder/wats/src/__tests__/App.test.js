import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('<Button />', () => {
    let component;
    beforeEach(() => {
        render( <App /> );
        component = screen.getByText(/Hello! Welcome to React Web App with JS setup!!!/i);
    });
    test('should render App component', () => {
        expect(component).toBeInTheDocument();
    });
})
