import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/w3.css';
import Header from './components/Header';
import PageContent from './components/PageContent';


function App() {
  const [navigation] = useState([
    { name: "About Me" },
    { name: "Portfolio" },
    { name: "Contact" },
    { name: "Resume" },
  ]);

  const [currentNavigation, setCurrentNavigation ] = useState(navigation[0]);

  return (
    <div className="App">
      {(<Header navigation={navigation} currentNavigation={currentNavigation} setCurrentNavigation={setCurrentNavigation} />) || (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      )}
      <div className="content">
        <PageContent currentNavigation={currentNavigation} />
      </div>
      <footer>
        <p>footer</p>
      </footer>
    </div>
  )
}

export default App;
