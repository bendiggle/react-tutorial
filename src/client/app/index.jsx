import React from 'react';
import {render} from 'react-dom';

/* Non-JSX Element */
//render(React.DOM.h1(null, 'Hello, world!'),
//    document.getElementById('app'));

/* JSX Element */
//render(<h1>Goodbye, world!</h1>, document.getElementById('app'));

/* Simple Component */
//class Component extends React.Component {
//    render() {
//        return (<h1>This is a React Component</h1>);
//    }
//}
//
//render(<Component/>, document.getElementById('app'));

/* Props */
//class Component extends React.Component {
//    render() {
//        return (<h1>This is a React Component made by {this.props.name}</h1>);
//    }
//}
//
//render(<Component name="Ben"/>, document.getElementById('app'));

/* State */
//class MyComponent extends React.Component {
//    constructor() {
//        super();
//        this.state = {count: 7};
//    }
//
//    render() {
//        return (<h1>{this.state.count}</h1>);
//    }
//}
//
//render(<MyComponent/>, document.getElementById('app'));

/* Events */
//class Counter extends React.Component {
//    constructor() {
//        super();
//        this.state = {count: 0};
//    }
//
//    incrementCounter() {
//        this.setState({count : this.state.count + 1});
//    }
//
//    render() {
//        return(
//            <div className="counter">
//                <h1>Count: {this.state.count}</h1>
//                <button type="button" onClick={this.incrementCounter.bind(this)}>Increment</button>
//            </div>
//        );
//    }
//}
//
//render(<Counter/>, document.getElementById('app'));

/* Unidirectional Data Flow */
class FilteredList extends React.Component {
    constructor() {
        super()
        this.state = {initialItems: ["Apples", "Broccoli", "Chicken", "Duck", "Eggs", "Fish", "Granola", "Hash Browns"],
                        items: []};

        this.state.items = this.state.initialItems;

        //this.setState({items: this.state.initialItems});
    }

    filterList(event) {
        var updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function(item){
            return item.toLowerCase().search(
                    event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    }

    render() {
        return(
            <div className="filter-list">
                <input type="text" placeholder="Search" onChange={this.filterList.bind(this)}/>
                <List items={this.state.items}/>
            </div>
        )
    }
}

class List extends React.Component {
    render() {
        return(
            <ul>
                {
                    this.props.items.map(function(item) {
                        return <li key={item}>{item}</li>
                    })
                }
            </ul>
        )
    }
}

render(<FilteredList/>, document.getElementById('app'));


