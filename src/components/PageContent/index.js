import React from 'react';
import AboutMe from '../AboutMe';
import Portfolio from '../Portfolio';

function PageContent({currentNavigation}) {
    switch(currentNavigation.name)
    {
      //case "Resume": return (<Resume />)
      //case "Contact": return (<Contact />)
      case "Portfolio": return (<Portfolio />)
      default: return (<AboutMe />)
    }
}

export default PageContent;