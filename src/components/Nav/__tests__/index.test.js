import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';


const currentNavigation = { "name": "About Me" };
afterEach(cleanup);



describe('Navigation component', () => {
    // baseline test
    it('renders', () => {
        render(<Nav navigation={[currentNavigation]} currentNavigation={currentNavigation} />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Nav currentNavigation={currentNavigation} />);

        expect(asFragment()).toMatchSnapshot();
    });
})