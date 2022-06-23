import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav({navigation=[], currentNavigation, setCurrentNavigation}) {
    
    

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentNavigation.name);
    }, [currentNavigation]);

    return (
        <nav>
            <ul className="flex-row">
                {navigation && navigation.map((navi) => (
                    <li
                    className={`mx-1 ${currentNavigation.name === navi.name && 'navActive'}`}
                    key={navi.name}
                >
                    <span onClick={() => {
                        setCurrentNavigation(navi);
                    }}
                    >
                        {capitalizeFirstLetter(navi.name)}
                    </span>
                </li>
                ))}
            </ul>
        </nav>
    )
}

export default Nav;