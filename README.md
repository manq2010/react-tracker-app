# react-tracker-app

Table of Contents
===

* [Working with States](#working-with-states)
* [React Hooks](#react-hooks)
* [Create React App](#create-react-app)
* [Package.JSON](#packagejson)
* [Index.html](#indexhtml)
* [Index.js](#indexjs)
* [App.js](#appjs)
* [Creating a Component](#creating-a-component)
* [Component Props](#component-props)
* [Events](#events)
* [Button Component](#button-component)
* [CSS Styling](#css-styling)
* [Tasks Component](#tasks-component)
* [State & useState Hook](#state--usestate-hook)
* [Icons with react-icons](#icons-with-react-icons)
* [Delete task & prop drilling](#delete-task--prop-drilling)
* [Toggle reminder & conditional styling](#toggle-reminder--conditional-styling)
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

`App.js`

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

`App.js`

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

Creating a Component
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
  return <div>l$0</div>
}

export default $1
```

The below is no longer require on the compoment function

```js
import React from 'react'
```

Component Props
---

#### Passing Props

`App.js`

```js
import Header from "./components/Header";

function App() {
  return (
    <div className="Container">
      <Header title='Hello'/>

    </div>
  );
}

export default App
```

`Header.js`

```js
const Header = (props) => {
    return (
        <header>
            <h1>Task Tracker {props.title} </h1>
            
        </header>
    )
}

export default Header

```

#### Default Props

`App.js`

```js
import Header from "./components/Header";

function App() {
  return (
    <div className="Container">
      <Header />

    </div>
  );
}

export default App

```

`Header.js`

```js
const Header = (props) => {
    return (
        <header>
            <h1>Task Tracker {props.title} </h1>
            
        </header>
    )
}

Header.defaultProps = {
    title : "Y'ellow",
  }

export default Header

```

#### Destructure the Props Object

`Header.js`

```js
const Header = ({ title }) => {
    return (
        <header>
            <h1>Task Tracker {title} </h1>

        </header>
    )
}

Header.defaultProps = {
    title: "Y'ellow..",
}

export default Header
```

#### Import Prop Types

`impt => tab`

```js
import PropTypes from 'prop-types'
```

`Header.js`

```js
import PropTypes from 'prop-types'


const Header = ({ title }) => {
    return (
        <header>
            <h1>Task Tracker {title} </h1>

        </header>
    )
}

Header.defaultProps = {
    title: "Y'ellow..",
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
```

`App.js`

```js
import Header from "./components/Header";

function App() {
  return (
    <div className="Container">
      <Header title={1}/>

    </div>
  );
}

export default App
```

Console Output: a way to ensure your code is robust and check errors before they happen

```t
react_devtools_backend.js:4026 Warning: Failed prop type: Invalid prop `title` of type `number` supplied to `Header`, expected `string`.
    at Header (http://localhost:3000/main.459a71a2e5da5856db0f.hot-update.js:26:5)
    at div
    at App
```

If it's required you can add the below line on the `Header.js`

```js
Header.propTypes = {
    title: PropTypes.string.isRequired,
}
```

Button Component
---

#### Another Example of reusable Props

`Header.js`

```js
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    return (
        <header className='header'>
            <h1>{title} </h1>
            <Button color='green' text='Hello' />
            <Button color='blue' text='Hello 1' />
            <Button color='yellow' text='Hello 2' />

        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS inline
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
```

`Button.js`

```js
import PropTypes from 'prop-types'

const Button = ({ color, text }) => {
    return <button style={{ backgroundColor: color }} className="btn">{text}</button>
}

Button.defaultProps = {
    color: 'steelblue',
    // text: 'Add'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
}

export default Button
```

Events
---

#### onClick used as a Prop (Events)

`Header.js`

```js
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('click')
    }
    
    return (
        <header className='header'>
            <h1>{title} </h1>
            <Button color='green' text='Add' onClick={onClick} />

        </header>
    )
}

Header.defaultProps = {
    title: "Task Tracker",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CSS inline
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header
```

`Button.js`

```ruby
import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
    return <button style={{ backgroundColor: color }} className="btn" onClick={onClick}>{text}</button>
}

Button.defaultProps = {
    color: 'steelblue',
    // text: 'Add'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
```

CSS Styling
---

1. StylesSheet
1. Style Components
1. Direct CSS in JS (inline Style)

#### Direct CSS in JS (inline Style)

```js
<header>
    <h1 style={{ color: 'red', backgroundColor: 'yellow' }}>Task Tracker {title} </h1>
</header>
```

A neat inline Styling. `Header.js`

```js
import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header>
            <h1 style={headingStyle}>Task Tracker {title} </h1>
        </header>
    )
}

Header.defaultProps = {
    title: "Y'ellow..",
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

const headingStyle = {
    color: 'red',
    backgroundColor: 'black'
}

export default Header
```

#### StylesSheet (Index CSS)

`Index.css`

```css
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* sources https://unsplash.com/photos/c9OCWLka764 */
body {
  font-family: 'Poppins', sans-serif;
}

.container {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

footer {
  margin-top: 30px;
  text-align: center;
}
```

Tasks Component
---

#### Creating a list with .map()

`Tasks.js`

```js
const tasks = [
    {
        "id": 1,
        "text": "Doctors Appointment",
        "day": "Feb 5th at 2:30pm",
        "reminder": true,

    },
    {
        "id": 2,
        "text": "Meeting at School",
        "day": "Feb 6th at 1:30pm",
        "reminder": true,
    },
    {
        "id": 3,
        "text": "Food Shopping",
        "day": "Feb 5th at 3:30pm",
        "reminder": false,
    }
]

const Tasks = () => {
    return (
        <>
        {tasks.map((task)=> (<h3>{task.text}</h3>))}
        </>
    )
}

export default Tasks
```

`App.js`

```js
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="container">
      <Header />
      <Tasks />

    </div>
  );
}

export default App
```

Console Output

```t
react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.

Check the render method of `Tasks`. See https://reactjs.org/link/warning-keys for more information.
    at h3
    at Tasks
    at div
    at App
```

To get rid of the warming we update the below line

```js
const Tasks = () => {
    return (
        <>
        {tasks.map((task)=> (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks
```

State & useState Hook
---

```js
import { useState } from "react"

const Tasks = () => {
    const [tasks, setTasks] = useState([
        {
            "id": 1,
            "text": "Doctors Appointment",
            "day": "Feb 5th at 2:30pm",
            "reminder": true,

        },
        {
            "id": 2,
            "text": "Meeting at School",
            "day": "Feb 6th at 1:30pm",
            "reminder": true,
        },
        {
            "id": 3,
            "text": "Food Shopping",
            "day": "Feb 5th at 3:30pm",
            "reminder": false,
        }
    ])

    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks
```

#### Global State

Making the data available globally to be used within other components if required

`App.js`

```js
import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {

  const [tasks, setTasks] = useState([
    {
      "id": 1,
      "text": "Doctors Appointment",
      "day": "Feb 5th at 2:30pm",
      "reminder": true,

    },
    {
      "id": 2,
      "text": "Meeting at School",
      "day": "Feb 6th at 1:30pm",
      "reminder": true,
    },
    {
      "id": 3,
      "text": "Food Shopping",
      "day": "Feb 5th at 3:30pm",
      "reminder": false,
    }
  ])

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />

    </div>
  );
}

export default App
```

`Tasks.js`

```js
const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (<h3 key={task.id}>{task.text}</h3>))}
        </>
    )
}

export default Tasks
```

#### Task Component

`Tasks.js`

```js
import Task from "./Task"

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map((task) => (<Task key={task.id} task={task} />))}
        </>
    )
}

export default Tasks
```

`Task.js`

```js
const Task = ({ task }) => {
    return (
        <div className='task'>
            <h3>{task.text}</h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
```

Icons with react-icons
---

Install the  react icons which allows you to use mutliple libraties, using the below command:

```
npm i react-icons
```

To verify that they are installed you can see from the `package.json` file

```json
{
  "name": "react-task-tracker",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.16.5",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.4.0",
    "react-scripts": "5.0.1",
    "web-vitals": "^2.1.4"
  },
```

`Task.js`

```js
import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
    return (
        <div className='task'>
            <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
```

Delete task & prop drilling
---

**NB**

* States gets passed down
* Actions gets passed up

`App.js`

```js
// Delete Task
  const deleteTask = (id) => {
    console.log('delete', id)
  }

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />

    </div>
  );

  ```

`Tasks.js`

```js
import Task from "./Task"

const Tasks = ({ tasks, onDelete }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} />
            ))}
        </>
    )
}

export default Tasks
```

`Task.js`

```js
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={onDelete} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
```

#### With the id returned

```js
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete }) => {
    return (
        <div className='task'>
            <h3>{task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} /></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
```

#### Deleting the task

`App.js`

```js
 // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Tasks to Show'}

    </div>
  );

  ```

Toggle reminder & conditional styling
---

`App.js`

```js
  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log('Id', id)
  }

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> :
        'No Tasks to Show'}

    </div>
```

`Tasks.js`

```js
import Task from "./Task"

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
            ))}
        </>
    )
}

export default Tasks
```

`Task.js`

```js
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className='task' onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
```

#### Toggling the reminder using id

i.e if reminder is true it becomes false whne the event is called or vice versa

`App.js`

```js
// Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ?
          { ...task, reminder: !task.reminder } :
          task
      )
    )
  }
```

`Task.js`

```ruby
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
            <h3>
                {task.text} <FaTimes style={{ color: 'red', cursor: 'pointer' }} onClick={() => onDelete(task.id)} />
            </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
```

Add Task Form
---

`AddTask.js`

```js
const AddTask = () => {
    return (
        <form action="" className="add-form">
            <div className="form-control">
                <label htmlFor="">Task</label>
                <input type="text" name="" id="" placeholder="Add Task" />
            </div>

            <div className="form-control">
                <label htmlFor="">Day & Time</label>
                <input type="text" name="" id="" placeholder="Add Day & Time" />
            </div>

            <div className="form-control form-control-check">
                <label htmlFor="">Set Reminder</label>
                <input type="checkbox" name="" id="" />
            </div>

            <input type="submit" value="Save Task" className="btn btn-block"/>
        </form>
    )
}

export default AddTask
```

App.js

```js
import AddTask from "./components/AddTask";

 return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ?
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> :
        'No Tasks to Show'}

    </div>
  );
```

#### Form input state (controlled components)

