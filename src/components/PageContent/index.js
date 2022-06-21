import React from 'react';
import AboutMe from '../AboutMe';

function PageContent({currentNavigation}) {
    switch(currentNavigation.name)
    {

      default: return (<AboutMe />)
    }
}

export default PageContent;