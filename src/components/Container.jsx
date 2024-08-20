import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LayersControl } from "react-leaflet";
import { FindMyPosition } from "./FindMyPosition";
import { Toolbar } from "./Toolbar";

export default function Container() {
	return (
		<div
			className="main-container"
			style={{ display: "flex", flexDirection: "column" }}
		>
			<MapContainer
				center={[-33.3604, -61.4713]}
				zoom={16}
				scrollWheelZoom={true}
				style={{ height: "90vh", width: "100vw" }}
			>
				<LayersControl />
				<FindMyPosition />
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
			</MapContainer>
			<Toolbar />
		</div>
	);
}
