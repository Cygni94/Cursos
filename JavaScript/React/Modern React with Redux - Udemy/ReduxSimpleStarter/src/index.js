import React from 'react';
import ReactDOM from 'react-dom';

//Create a new component. This component should produce some HTML

const App = () => {
    return <div><h1>Bitches!</h1></div>;
}

//Take this component's generated HTML and put it on the page (the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));