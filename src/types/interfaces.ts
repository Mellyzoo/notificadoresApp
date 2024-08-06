interface Localizacion {
	latitud: number;
	longitud: number;
	timestamp?: number;
}

interface Direccion {
	calle: string;
	numero: number;
	localidad: string;
}

interface Plan {
	planId: number;
	direccion?: Direccion;
	localizacion: Localizacion;
	area?: GeoJSONLayer;
	cod_postal: number;
	edificios?: Edificio[];
	viviendas?: Vivienda[];
}

interface Vivienda {
	id: number | string;
	cuenta: number;
	planId: number;
	direccion: Direccion;
	localizacion?: Localizacion;
}

interface Edificio {
	id: number | string;
	direccion: Direccion;
	planId: number;
	localizacion: Localizacion;
	departamentos: Departamento[];
	numPisos?: number;
}

interface Departamento {
	id: number | string;
	cuenta: number;
	edificioId: number | string;
	localizacion: Localizacion;
}

// Definiciones de tipos GeoJSON
type GeoJSONType = "Feature" | "FeatureCollection";

interface GeoJSONGeometry {
	type:
		| "Point"
		| "LineString"
		| "Polygon"
		| "MultiPoint"
		| "MultiLineString"
		| "MultiPolygon"
		| "GeometryCollection";
	coordinates: number[] | number[][] | number[][][] | number[][][][];
}

interface GeoJSONFeature {
	type: "Feature";
	geometry: GeoJSONGeometry;
	properties: { [key: string]: any };
}

interface GeoJSONFeatureCollection {
	type: "FeatureCollection";
	features: GeoJSONFeature[];
}

type GeoJSONLayer = GeoJSONFeature | GeoJSONFeatureCollection;
