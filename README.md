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
```
render(React.DOM.h1(null, 'Hello, world!'),
    document.getElementById('app'));
```

JSX Element
```
render(<h1>Goodbye, world!</h1>, document.getElementById('app'));
```

### Creating a Simple Component
```
class Component extends React.Component {
    render() {
        return (<h1>This is a React Component</h1>);
    }
}
render(<Component/>, document.getElementById('app'));
```

### Props
Attribute can be passed to the component via this.props
```
class Component extends React.Component {
    render() {
        return (<h1>This is a React Component made by {this.props.name}</h1>);
    }
}
render(<Component name="Ben"/>, document.getElementById('app'));
```

### Specs, Lifecycle and State
The render method is the only required spec for created a component. However, there are some helpful lifecycle methods which are useful.

Lifecycle methods:

* __componentWillMount__ - Invoked once, on both client and server before rendering occurs.
* __componentDidMount__ – Invoked once, only on the client, after rendering occurs.
* __shouldComponentUpdate__ – Return value determines whether component should update.
* __componentWillUnmount__ – Invoked prior to unmounting component.

[There are more!!](http://facebook.github.io/react/docs/component-specs.html)

### State
Every Component has a state object and a probs object. To set the state, you should call the `setState()` method. 
Calling setState triggers UI updates and is the __'bread and butter'__ of React’s interactivity. When setState is called,
the render method is automatically called.
```
class MyComponent extends React.Component {
    constructor() {
        super();
        this.state = {count: 7};
    }
    render() {
        return (<h1>{this.state.count}</h1>);
    }
}
render(<MyComponent/>, document.getElementById('app'));
```

### Events
React also has a built in cross browser events system. The events are attached as properties of components and can trigger methods.
```
class Counter extends React.Component {
    constructor() {
        super();
        this.state = {count: 0};
    }
    incrementCounter() {
        this.setState({count : this.state.count + 1});
    }
    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button type="button" onClick={this.incrementCounter.bind(this)}>Increment</button>
            </div>
        );
    }
}
render(<Counter/>, document.getElementById('app'));
```


