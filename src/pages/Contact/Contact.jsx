import React from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  LoadScript,
} from '@react-google-maps/api';
import useTitle from '../../hooks/useTitle';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

const Contact = () => {
    useTitle('Contact Us') 
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_API_KEY',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return (
    <div>
      {isLoaded ? (
        <LoadScript googleMapsApiKey="YOUR_API_KEY">
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Add any additional map components, e.g., markers or info windows */}
          </GoogleMap>
        </LoadScript>
      ) : (
        // Handle the case when Google Maps is not loaded
        <div>
          <div className="bg-gradient-to-b from-blue-500 to-blue-900 min-h-screen flex flex-col items-center justify-center">
            <div className="text-white text-4xl font-bold mb-4">Contact Us</div>
            <div className="bg-white p-4 rounded-lg">
              <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
              <p className="text-gray-600 mb-4">Feel free to contact us anytime.</p>

              {/* Contact Information */}
              <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800">Contact Information</h2>
                <p className="text-gray-600">
                  Email: example@example.com
                  <br />
                  Phone: +1 123-456-7890
                  <br />
                  Address: 123 Main Street, City, Country
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
