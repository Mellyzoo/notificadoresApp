import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer } from "react-leaflet";
import { LayersControl } from "react-leaflet";
import { FindMyPosition } from "./FindMyPosition";

export default function Container() {
	return (
		<MapContainer
			center={[-33.3604, -61.4713]}
			zoom={16}
			scrollWheelZoom={false}
			style={{ height: "100vh", width: "100vw" }}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<FindMyPosition />
			<LayersControl />
		</MapContainer>
	);
}
