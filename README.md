# react-tracker-app

Table of Contents
===

* [Working with States](#working-with-states)
* [React Hooks](#react-hooks)
* [Create React App](#create-react-app)
* [Package.JSON]()
* [Index.html]()
* [Index.js]()
* [App.js]()
* []()
* []()
* []()
* []()
* []()
* []()
* []()

Working with States
---

Components can have "state" which is an object that determines how a component renders and behaves. Components can either be a `function` or `class`

**"App"** or **"global"** state refers to the state that is available to the entire UI, not just a single component

React Hooks
---

**React Hooks** are functions that let us `hook` into the `React` state and lifecycle features from function components

* `useState` - returns a stateful value and a function to update it
* `useEffect` - perform side effects in function components
* `useContext`, useReducer, useRef -

Create React App
---

```
npx create-react-app <app-name>
cd <app-name>
npm start

```

Install the [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en) extension on chrome. It allows your ti see all the react states, components etc

Package.JSON
---

React-dom - responsible for rendering the react application to the DOM
Scripts
start - npm start will run the app on localhost:3000
build - will build the static assests for deployment

Index.html
---

This is the SPA (Single Page Application) that's being loaded. The below is the gateway to the UI or react applicatin

```html
<div id="root"></div>
  ```

Index.js
---

This is the entry point for react. It grabs the `div` with id `root` and inserting it the app into that div

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
```

App.js
---

This is the root app component and everthing seen on the <http://localhost:3000/> comes from here. In the return the syntax is jsx (javascript syntax extension)

```js
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;

```

**NB** return a single element and everything else goes inside of it

* you can add an expresion on the function before return

```js
function App() {
  const name = 'Mancoba'
  const test = false
  return (
    <div className="Container">
      <h1>Hello World</h1>
      <h2>hello {name}</h2>
      <h3>if {test ? 'Yes' : 'No'}</h3>

    </div>
  );
}

export default App;

```

Componets
---

Naming conversion starts with uppercase.

##### rcc

```js
import React, { Component } from 'react'

export default class FileName extends Component {
  render() {
    return <div>$2</div>
  }
}
```

##### rce

```js
import React, { Component } from 'react'

export class FileName extends Component {
  render() {
    return <div>$2</div>
  }
}

export default $1
```

##### rfcp

```js
import React from 'react'
import PropTypes from 'prop-types'

function $1(props) {
  return <div>$0</div>
}

$1.propTypes = {}

export default $1
```

##### rfc

```js
import React from 'react'

export default function $1() {
  return <div>$0</div>
}
```

##### rfce

```ruby
import React from 'react'

function $1() {
  return <div>$0</div>
}

export default $1
```

##### rafce

```js
import React from 'react'

const $1 = () => {
  return <div>$0</div>
}

export default $1
```
