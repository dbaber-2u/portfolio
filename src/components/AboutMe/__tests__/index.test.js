import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutMe from '..';

afterEach(cleanup);


describe('About Me component', () => {
    // baseline test
    it('renders', () => {
        render(<AboutMe />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<AboutMe />);

        expect(asFragment()).toMatchSnapshot();
    });
})