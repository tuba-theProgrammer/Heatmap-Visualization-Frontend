import React, { useEffect } from 'react';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import 'leaflet-geosearch/dist/geosearch.css';


const Search: React.FC = () => {
  const map = useMap();

  useEffect(() => {
    const provider = new OpenStreetMapProvider();



    const searchControl = new (GeoSearchControl as any)({
      provider,
      style: 'bar',
      showMarker: true,
      showPopup: false,
      autoClose: true,
      retainZoomLevel: true,
    });

    // Add the search control to the map
    map.addControl(searchControl);

    // Cleanup by removing the search control on component unmount
    return () => {
      map.removeControl(searchControl);
    };
  }, [map]);

  return null;
};

export default Search;
