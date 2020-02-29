import React from 'react';
import './App.css';
import TagManager from 'react-gtm-module'

Object.defineProperty(window, 'pageId', {
  value: 33456,
  writable: false
})

function App() {
  const tagManagerArgs = {
      gtmId: 'GTM-53G7WHF'
  }

  TagManager.initialize(tagManagerArgs)
  return (
    <header className="">
      <ul>
        <li data-id="111">list</li>
        <li className="terry">page id</li>
      </ul>
    </header>
  );
}

export default App;
