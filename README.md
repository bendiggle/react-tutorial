# react-tutorial

## Set-up
* You need node.js and npm installed
* Clone repo
* npm install

## Run
To run the app, use the command 'npm run dev'

## What is React?
It is a UI library to aid the creation of interactive, stateful and reusable UI components

### Selling points:
* Not just client side
* Virtual DOM

## Let's Start!!!
### Creating a Simple Element
Non-JSX Element
`
render(React.DOM.h1(null, 'Hello, world!'),
    document.getElementById('app'));
`

JSX Element
`
render(<h1>Goodbye, world!</h1>, document.getElementById('app'));
`

### Creating a Simple Component

`
class Component extends React.Component {
    render() {
        return (<h1>This is a React Component</h1>);
    }
}
render(<Component/>, document.getElementById('app'));
`