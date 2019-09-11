import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Todo from './components/Todo.js'


function App() {
  return (
    <div className="App">
      <Header subtitle="A brand new app by a real OG" />
      <Todo/>
      </div>
  );
}

export default App;
