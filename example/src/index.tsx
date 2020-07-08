import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {Interface} from 'react-model-driven-ui';

 /*
 / Define the Schema of the JSON
*/
const JSONSchema = [
  {
    element: "button",
    properties: {
      title: "Hello"
    }
  },
  {
    element: "block",
    content: "Hello"
  },
]

 /*
 / The Example of how to setup props, TypeScript interface, and realisation example
*/
interface IButton {
  title: string
}
const Button = (props: IButton) => <button>{props.title}</button>

 /*
 / Define the library of the components. The keys should be JSX Component or string of the HTML tag
*/
const library = {
  button: Button,
  block: "div"
}

ReactDOM.render(
  <React.StrictMode>
    <Interface 
      lib={library}
      model={JSONSchema}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
