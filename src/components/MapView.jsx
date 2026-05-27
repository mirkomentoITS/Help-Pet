import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'


export default function MapView({ pos }) {

  return (
    <div className='map-wrapper'>
      <MapContainer
        center={[44.938, 7.675]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png"
          attribution='&copy; OpenStreetMap contributors &copy; Stadia Maps'
        />

        {pos.map((animal) => (    
          <Marker key={animal.nome} position={[animal.lat, animal.lng]}>
            <Popup>{animal.nome}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}