import { MapContainer, Marker, Popup, TileLayer,useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";
import { openDB } from "idb";
import {AddPlaceModal} from "./AddPlaceModal"
// export default function MapBase() {
// 	return (
// 		<MapContainer
// 			center={[-33.3604, -61.4713]}
// 			zoom={9}
// 			style={{ height: "100vh", width: "100vw" }}
// 		>
// 			<TileLayer
// 				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// 				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// 			/>
// 			<Marker position={[-33.2743, -60.7127]}>
// 				<Popup>
// 					El primer marcador sobre Rosario <br /> Hay que customizarlo.
// 				</Popup>
// 			</Marker>
// 		</MapContainer>
// 	);
// }
const MapBase = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [coordenadas, setCoordenadas] = useState(null);

  const handleAddLocation = (location) => {
    // Guardar en IndexedDB
    openDB('edificios-db', 1, {
      upgrade(db) {
        db.createObjectStore('edificios', { keyPath: 'id' });
      },
    }).then(db => {
      return db.put('edificios', { ...location, coordenadas });
    });
  };

  useMapEvent({
    click(e) {
      setCoordenadas(e.latlng);
      setModalOpen(true);
    },
  });

  return (
    <div>
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: '400px', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {coordenadas && <Marker position={coordenadas} />}
      </MapContainer>
      <button type="button" onClick={() => setModalOpen(true)}>Agregar</button>
      <AddPlaceModal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        onSave={handleAddLocation} 
      />
    </div>
  );
};

export default MapBase;