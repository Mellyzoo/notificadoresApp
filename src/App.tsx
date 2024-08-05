import "./App.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import React from "react";

export default function App() {
	return (		
			<MapContainer
				center={[-33.3604, -61.4713]}
				zoom={8}
				style={{ height: "100vh", width: "100vw" }}
			>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<Marker position={[-33.2743, -60.7127]}>
					<Popup>
						El primer marcador sobre Rosario <br /> Hay que customizarlo.
					</Popup>
				</Marker>
			</MapContainer>
	);
}
