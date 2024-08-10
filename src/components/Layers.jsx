import {
	FeatureGroup,
	LayerGroup,
	LayersControl,
	Marker,
	Popup,
} from "react-leaflet";

export const Layers = () => {
	return (
		<LayersControl position="topright">
			<LayersControl.Overlay name="Marker with popup">
				<Marker position={position}>
					{/* <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup> */}
				</Marker>
			</LayersControl.Overlay>
			<LayersControl.Overlay checked name="Layer group with circles">
				<LayerGroup>
					{/* <Circle
          center={center}
          pathOptions={{ fillColor: 'blue' }}
          radius={200}
        /> */}
					{/* <Circle
          center={center}
          pathOptions={{ fillColor: 'red' }}
          radius={100}
          stroke={false}
        /> */}
					<LayerGroup>
						{/* <Circle
            center={[51.51, -0.08]}
            pathOptions={{ color: 'green', fillColor: 'green' }}
            radius={100}
          /> */}
					</LayerGroup>
				</LayerGroup>
			</LayersControl.Overlay>
			<LayersControl.Overlay name="Feature group">
				<FeatureGroup>
					<Popup>Popup in FeatureGroup</Popup>
					{/* <Circle center={[51.51, -0.06]} radius={200} />
        <Rectangle bounds={rectangle} /> */}
				</FeatureGroup>
			</LayersControl.Overlay>
		</LayersControl>
	);
};
