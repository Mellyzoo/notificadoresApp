// import React,{useState,useEffect
// } from "react";
// import {} from "../types/interfaces"
// interface Position {
//   latitude: number;
//   longitude: number;
//   timestamp: number;
// }

// const GeolocationTracker: React.FC = () => {
//   const [position, setPosition] = useState<Position | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   const handlePosition = (pos: GeolocationPosition) => {
//     const { latitude, longitude } = pos.coords;
//     const { timestamp } = pos;
//     setPosition({ latitude, longitude, timestamp });
//   };

//   const handleError = (err: GeolocationPositionError) => {
//     setError(err.message);
//   };

//   useEffect(() => {
//     if (navigator.geolocation) {
//       const watchId = navigator.geolocation.watchPosition(handlePosition, handleError, {
//         enableHighAccuracy: true,
//         timeout: 5000,
//         maximumAge: 0,
//       });

//       return () => {
//         navigator.geolocation.clearWatch(watchId);
//       };
//     } else {
//       setError('Geolocation is not supported by this browser.');
//     }
//   }, []);

//   return (
//     <div>
//       <h1>Geolocation Tracker</h1>
//       {error ? (
//         <p>Error: {error}</p>
//       ) : position ? (
//         <div>
//           <p>Latitude: {position.latitude}</p>
//           <p>Longitude: {position.longitude}</p>
//           <p>Timestamp: {new Date(position.timestamp).toLocaleString()}</p>
//         </div>
//       ) : (
//         <p>Getting the location...</p>
//       )}
//     </div>
//   );
// };

// export default GeolocationTracker;
