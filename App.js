import React from 'react';
import ReactDOM from 'react-dom/client';
import { think, SQUIRREL } from 'cowsay';

const Title = () => (
  <h1 id="heading" className="heading" tabIndex="5">
    Namaste React with JSX hello World here and there
  </h1>
);

const num = 10000;

const HeadingComponent4 = () => (
  <div className="container">
    <Title />
    <Title></Title>
    {Title()}
    {num}
    <h2>{100 + 200}</h2>
    {console.log('adfdsssa')}
    <h2 className="heading">Namaste React Functional Component</h2>
  </div>
);

console.log(
  think({
    text: 'grazing in the browser',
    cow: SQUIRREL,
    eyes: 'pp',
    tongue: ';;',
  })
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent4 />);
console.log(root);
