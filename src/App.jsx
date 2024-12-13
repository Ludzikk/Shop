import { useState, useEffect } from "react";
import Nav from "./components/Nav/Nav";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

export default function App() {
	// useEffect(() => {
	// 	fetch("https://api.escuelajs.co/api/v1/products")
	// 		.then((res) => res.json())
	// 		.then((json) => console.log(json));
	// }, []);

	return (
		<>
			<Nav />
			<Header />
			<Main />
			<Footer />
		</>
	);
}
