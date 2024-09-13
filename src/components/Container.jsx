import "leaflet/dist/leaflet.css";
import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import { LayersControl } from "react-leaflet";
import { FindMyPosition } from "./FindMyPosition";
import { Toolbar } from "./Toolbar";

export default function Container() {
	// return (
	// 	<div
	// 		className="main-container"
	// 		style={{ display: "flex", flexDirection: "column" }}
	// 	>
	// 		<MapContainer
	// 			center={[-33.3604, -61.4713]}
	// 			zoom={16}
	// 			scrollWheelZoom={true}
	// 			style={{ height: "90vh", width: "100vw" }}
	// 		>
	// 			<LayersControl />
	// 			<FindMyPosition />
	// 			<TileLayer
	// 				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
	// 				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
	// 			/>
	// 		</MapContainer>
	// 		<Toolbar />
	// 	</div>
	// );
	// Estado para guardar el centro y el nivel de zoom del mapa
	const [mapState, setMapState] = useState({
		zoom: 9,
		center: [-32.939, -60.59372],
	});
	function MapComponent() {
		const map = useMap();
		// Función para actualizar el hash en la URL basado en el estado del mapa
		const updateHash = () => {
			const zoom = map.getZoom();
			const center = map.getCenter();
			const { lat, lng } = center;

			// Actualizar la URL con el hash
			window.location.hash = `#map=${zoom}/${lat.toFixed(5)}/${lng.toFixed(5)}`;
		};

		useEffect(() => {
			map.on("moveend", updateHash); // Actualizar hash cuando se mueva el mapa
			return () => {
				map.off("moveend", updateHash); // Limpiar el evento cuando se desmonte el componente
			};
		}, [map]);

		return null; // Este componente no necesita renderizar nada
	}
	// Leer el hash de la URL cuando se carga el componente
	useEffect(() => {
		if (window.location.hash) {
			const [zoom, lat, lng] = window.location.hash
				.replace("#map=", "")
				.split("/")
				.map(Number);
			if (zoom && lat && lng) {
				setMapState({ zoom, center: [lat, lng] });
			}
		}
	}, []);

	return (
		<MapContainer
			center={mapState.center}
			zoom={mapState.zoom}
			style={{ height: "100%", width: "100%" }}
		>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			<MapComponent />
		</MapContainer>
	);
}
