var element = React.createElement('div', {},
    React.createElement(Counter),
    React.createElement(Counter),
    React.createElement(Counter)
);


ReactDOM.render(element, document.getElementById('app'));