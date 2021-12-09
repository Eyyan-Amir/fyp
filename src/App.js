import React ,{useEffect} from "react";
import logo from './logo.svg';
import './App.css';
import "./assets/scss/styles.scss";
// import "./scss/style.scss";
import Main from './components/Main'



function App() {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='para'>
          Edit <code>src/App.js</code> and save to reloads.
        </p>
        <a
			className="App-link"
			href="https://reactjs.org"
			target="_blank"
			rel="noopener noreferrer"
		>
			Learn React
        </a>
        <Main />
      </header>
    </div>
    </>
  );
}

export default App;

