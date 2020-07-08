# React Model Driven UI

> Work with React via JSON Schema

## Install

```shell
yarn add git+https://github.com/semsystems/react-model-driven-ui.git
```

## Usage


Define the Schema of the JSON
```tsx
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
```

The Example of how to setup props, TypeScript interface, and realisation example

```tsx
interface IButton {
  title: string
}
const Button = (props: IButton) => <button>{props.title}</button>
```

Define the library of the components. The keys should be JSX Component or string of the HTML tag
```tsx
const library = {
  button: Button,
  block: "div"
}
```

How to markup the component "Interface"
```tsx
ReactDOM.render(
  <React.StrictMode>
    <Interface 
      lib={library}
      model={JSONSchema}
    />
  </React.StrictMode>,
  document.getElementById('root')
);
```

See the full code of the example [here](https://github.com/semsystems/react-model-driven-ui/blob/master/example/src/index.tsx).
