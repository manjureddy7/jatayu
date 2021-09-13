import { render, screen } from '@testing-library/react';
import React from 'react';
import App from '../App';

describe('<App />', () => {
    let component;
    beforeEach(() => {
        render(<App />);
        component = screen.getByText(/Welcome to JATAYU generated React Web app with basic Redux JS setup!/i);
    });
    test('should render App component', () => {
        expect(component).toBeInTheDocument();
    });
});
