import React from 'react';
import './App.css';
import TagManager from 'react-gtm-module'

Object.defineProperty(window, 'pageId', {
  value: 33456,
  writable: false
})

const list = [
  {
    itemId: 9453,
    name: 'terry1'
  },
  {
    itemId: 9454,
    name: 'terry2'
  },
  {
    itemId: 9455,
    name: 'terry3'
  },
]

function App() {
  const tagManagerArgs = {
    gtmId: 'GTM-53G7WHF'
  }

  TagManager.initialize(tagManagerArgs)

  // 直播間編號
  window.dataLayer.push({
    pageId: '直播間編號: 3345678'
  })

  return (
    <header className="">
      <ul>
        <li className="list" data-id="111">list</li>
        {
          list.map((obj) => (
            <li className="terry"
              onClick={() => {

                window.dataLayer.push({
                  pageId: obj.itemId,
                  event: 'terryClicked'
                })

              }}
            >{obj.name}
            </li>
          ))
        }
      </ul>
      <button
        className="checkoutBtn"
      >結帳</button>
    </header>
  );
}

export default App;
