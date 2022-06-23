import React from 'react';
import Nav from '../Nav';

function Header({navigation=[], currentNavigation, setCurrentNavigation}) {
    return (
        <header className="flex-row px-1">
            <h2 className="mx-1">David Baber</h2>
            <Nav navigation={navigation} currentNavigation={currentNavigation} setCurrentNavigation={setCurrentNavigation} />
        </header>
    );
};

export default Header;