import React from 'react';
import logo from './logo.svg';
import './App.css';
import { styled } from "@material-ui/styles"
import HomePage from './Components/Home/HomePage';

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

const Container = styled("div")({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "scroll"
});

export default App;

/* 
  original stuff (within header tag): 

  <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
*/