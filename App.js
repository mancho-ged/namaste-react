import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { id: 'parent' }, [
  React.createElement('div', { id: 'child' }, [
    React.createElement('h1', {}, 'This is Namaste React 🚀'),
    React.createElement('h2', {}, "I'm an h2 tag"),
  ]),
  React.createElement('div', { id: 'child2' }, [
    React.createElement('h3', {}, "I'm an h3 tag"),
    React.createElement('h4', {}, "I'm an h4 tag"),
  ]),
]);

console.log(parent); //object

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);
