import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageContent from '..';


const currentNavigation = { "name": "Portfolio" };
afterEach(cleanup);



describe('PageContent component', () => {
    // baseline test
    it('renders', () => {
        render(<PageContent navigation={[currentNavigation]} currentNavigation={currentNavigation} />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<PageContent currentNavigation={currentNavigation} />);

        expect(asFragment()).toMatchSnapshot();
    });
})