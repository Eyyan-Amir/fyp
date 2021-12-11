import React from "react";
import "./assets/scss/styles.scss";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from './components/Main'



function App() {
  return (
    <>
		<div className="App">
        	<Header />
          		<Main />
        	<Footer />
    	</div>
    </>
  );
}

export default App;

