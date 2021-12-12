import React from "react";
import "./assets/scss/styles.scss";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Main from "./components/Main";

function App() {
	return (
		<>
			<div className='App'>
				<Header />
				<div>{/* <img src={require(`./logo.svg`).default} alt='react-icon' /> */}</div>
				<Main />
				<Footer />
			</div>
		</>
	);
}

export default App;
