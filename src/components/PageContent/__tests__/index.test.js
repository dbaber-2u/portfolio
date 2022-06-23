import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PageContent from '..';


const navigations = [
    { "name": "About Me" },
    { "name": "Contact" },
    { "name": "Portfolio" },
    { "name": "Resume" }
];

afterEach(cleanup);



describe('PageContent component', () => {
    // baseline test
    //it('renders', () => {
    //    render(<PageContent navigation={[currentNavigation]} currentNavigation={currentNavigation} />);
    //});

    navigations.map((curNav, i) => (
        it('renders ${curNav.name}', () => {
            render(<PageContent navigation={navigations} currentNavigation={curNav} />);
        })
    ));

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<PageContent currentNavigation={navigations[0]} />);

        expect(asFragment()).toMatchSnapshot();
    });
})