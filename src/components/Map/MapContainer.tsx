import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const MapContainer = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCs1x_p1PPFFhSwgEcqODh3joucNEzQLkU'
    })

    return isLoaded ? (
        <GoogleMap
        mapContainerStyle={{width: '100%', height: '400px'}}
        center={
            { lat: 25.626643, lng: -100.269545 }
        }
        zoom={12}
        >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
        <Marker
            position={
                { lat: 25.642218, lng: -100.269054}
            }
        />
        <Marker
            position={
                { lat: 25.582386, lng: -100.254781}
            }
        />
        </GoogleMap>
    ) : <></>
}

export default MapContainer
