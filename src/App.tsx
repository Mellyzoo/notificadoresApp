import "./App.css";
import React from "react";
import Container from "./components/Container";

export default function App() {
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("/serviceWorker.js")
			.then((registration) => {
				registration.addEventListener("updatefound", () => {
					// If updatefound is fired, it means that there's
					// a new service worker being installed.
					const installingWorker = registration.installing;
					console.log(
						"A new service worker is being installed:",
						installingWorker,
					);

					// You can listen for changes to the installing service worker's
					// state via installingWorker.onstatechange
				});
			})
			.catch((error) => {
				console.error(`Service worker registration failed: ${error}`);
			});
	} else {
		console.error("Service workers are not supported.");
	}
	return <Container />;
}
