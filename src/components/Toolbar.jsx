import React from "react";
import { MapContainer } from "react-leaflet";
import ImagePosition from "../assets/find.png";
// import { FindMyPosition } from "./FindMyPosition";

export function Toolbar() {
	return (
		<div style={{ height: "10vh", width: "100vw", backgroundColor: "red" }}>
			{/* <FindMyPosition /> */}
			<img
				style={{ width: "10px", height: "10px" }}
				src={ImagePosition}
				alt="find"
			/>
		</div>
	);
}
