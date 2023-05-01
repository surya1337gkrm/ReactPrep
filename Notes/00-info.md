# 01. Introduction

**TreeShaking**: Bundlers will remove the unnecessary code in out application
Like, removing unwanted/unused methods/functions of a library we installed in app.

npx is used to execute a package where as npm is used to install/run. npm is simillar to 'npm run ...'

in package.json, there is a browserlists section. babel uses this data to transpile the code to support these browsers listed[ i.e, all browsers will be supported, but these listed browsers must be supported. these browsers will be targetted first. Polyfills are written accordingly.]

---

JSX should only have one parent. So either wrap the jsx with a div or **React.Fragment component(<></>)**

**Dynamic UI** - When we build a realworld application, we need our application to be dynamic based on the location/info etc... Data will be sent from the backend api, so we should use this data and build the frontend based on the UI. which is called as **Config Driven UI/Dynamic UI**

---

In functional component, All the arguments passed to the function component (or function) will be wrapped a single variable called **props**. Props are properties that we pass to a children component that we can access in the component using props variable.

`function f(param1,param2){}` //params <br>

`f(arg1,arg2)` //arguments

---

- If we have multiple props to pass and we have a data as an object, we can just use spready syntax to to pass all properties at once.

---

[ **React handles this internally** ] In react,We keep the representation of DOM with us known as **Virtual DOM**.

- In React, We need virtual dom for **Reconcilliation** [ _The process of syncing Virtual DOM with the real DOM_].<br>
  **Reconcilliation** involves following steps: <br> - Renders a component - Constructs virtual DOM
  -Checks for changes between DOM & V-DOM
  -If there are any changes, updates the specific changes
  -Rerenders the component.
  -Reconcilliation involves an algorithm that react uses to diff one DOM tree from another(Virtual DOM) which is also known as **Diffing algorithm** and it determines what needs to changed/unchanged in the UI.<br>

- In React16, **React-Fiber** was introduced, which is a new reconcilliation engine. This new reconcilliation engine is responsible for new diffing algorithm that improves the react and makes it faster.

---

Always prefer using a unique id as value for the key attribute in a list and avoid using index. **Using index might result in performance issues and data binding issues in case reordering in the form of sorting, filtering might happen**.

---

## Environment Variables

Unlike nodejs/express, we don't need to install/require 'dotenv' library in our react application to read environment variables. Most of the times, Our bundlers like webpack,vite will take care of these env variables.

In order to store and read environment variables [ helps us to hide sensitive information ] in react, create a .env file in the root directory and store the data as key value pairs.

In **create-react-app**, values stored in .env should have the key value starting with **REACT*APP*\<Varialble name>**.

**Example**<br>
`REACT_APP_YOUTUBE_API_KEY='VALUE'`

To read this value in our component/application,we need access this variable using **process.env**

**Example**<br>
`process.env.REACT_APP_YOUTUBE_API_KEY`

---

## Exports

A component can be exported in two ways.<br>

- **Named Export**
  export const App=()=<></>
- **Default export**
  const App=()=><></>
  export default App;

These components/items can be imported in any component/js file as follows.

- **Named Imports** [ _Components which are exported as named exports_ ]
  import {App} from '<file path>'
- **Default Imports**
  import App from '<file path>'

**There can be only one default export from a file.**

---

Browsers will stop the api requests to cross origin requests. to avoid this error, use CORS Plugin. Or, in the backend api, allow cors.
