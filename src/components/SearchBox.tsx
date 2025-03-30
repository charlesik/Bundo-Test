"use client"
import React from "react";

interface SearchBoxProps {
    onPlaceSelect: (data: {
      id: string;
      lat: number;
      long: number;
      address: string;
    }) => void;
  }
  
 const SearchBox: React.FC<SearchBoxProps> = ({ onPlaceSelect }) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
  
    React.useEffect(() => {
      const autocomplete = new google.maps.places.Autocomplete(inputRef.current!, { types: ['geocode'] });
  
      autocomplete.addListener('place_changed', () => {
        const place = autocomplete.getPlace();
  
        if (place.geometry && place.geometry.location) {
          const locationData = {
            id: place.place_id || "",
            lat: place.geometry.location.lat(),
            long: place.geometry.location.lng(),
            address: place.formatted_address || '',
          };
  
          onPlaceSelect(locationData); // Send the data back to the parent component
        }
      });
    }, [onPlaceSelect]);
  
    return <input ref={inputRef} type="text" placeholder="Search for a location..." style={{ width: '100%', padding: '10px' }} />;
  };

 export default SearchBox 
  