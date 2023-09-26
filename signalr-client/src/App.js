import React, { useEffect, useState } from "react";
import { startConnection, addOfferListener } from "./signalrService";

function App() {
	const [offers, setOffers] = useState([]);

	useEffect(() => {
		startConnection()
			.then(() => console.log("Connection started.......!"))
			.catch((err) => console.log("Error while connecting to the server"));

		addOfferListener((result) => {
			setOffers([...offers, result]);
		});
	}, []);

	return (
		<div className="container mt-4">
			<h2>Data loaded from the SignalR server:</h2>
			<div className="alert alert-warning" role="alert">
				{offers.map((item, index) => (
					<div key={index}>Offer: {item}</div>
				))}
			</div>
		</div>
	);
}

export default App;
