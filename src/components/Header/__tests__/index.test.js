import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '..';


const currentNavigation = { "name": "NavItem" };
afterEach(cleanup);



describe('Header component', () => {
    // baseline test
    it('renders', () => {
        render(<Header currentNavigation={currentNavigation} />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Header currentNavigation={currentNavigation} />);

        expect(asFragment()).toMatchSnapshot();
    });
})