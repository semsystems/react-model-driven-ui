# react-model-driven-ui

> Work with React via JSON Schema

## Install

```bash
npm install --save react-model-driven-ui
```

## Usage

```tsx
import React, { Component } from 'react'

import {Interface} from 'react-model-driven-ui'

class Example extends Component {
  render() {
    return <Interface
      lib={Library}
      model={JSONSchema}
    />
  }
}
```

## License

MIT © [ptaberg](https://github.com/ptaberg)
