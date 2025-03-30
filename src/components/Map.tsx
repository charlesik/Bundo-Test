"use client"
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MapPin, Plus } from "lucide-react";
import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import AddBusinessLocationForm from "./AddBusinessLocation";

function MapLocations() {
  const containerStyle = {
    width: "100%",
    height: "678px",
    borderRadius: "10px",
    marginTop: "15px",
  };

  const center = {
    lat: 37.7749, // Example: San Francisco
    lng: -122.4194,
  };
  const locations = [
    { lat: 37.7749, lng: -122.4194, name: "San Francisco" },
    { lat: 34.0522, lng: -118.2437, name: "Los Angeles" },
    { lat: 40.7128, lng: -74.0060, name: "New York" },
  ];
  return (
    <div className="px-[80px] py-10">
      <div className="flex justify-between">
        <p className="font-[500] text-[24px]">Explore Business</p>
        
        <Dialog>
      <DialogTrigger asChild>
      <button className="flex bg-[#34A853] p-3 text-white rounded-lg cursor-pointer">
          <Plus /> Add Businness
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Business</DialogTitle>
          <DialogDescription>
          </DialogDescription>
        </DialogHeader>
       <AddBusinessLocationForm/>
        <DialogFooter>
          
        </DialogFooter>
      </DialogContent>
    </Dialog>
      </div>
      <LoadScript
        googleMapsApiKey={"AIzaSyAgMizQi7APptUD5j_GJcguTz-0LK3VC2Q"}
        libraries={['places']}
      >
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {locations.map((location, index) => (
          <Marker
            key={index}
            position={{ lat: location.lat, lng: location.lng }}
            title={location.name}
          />
        ))}
        </GoogleMap>
      </LoadScript>
      <div className="h-[678px] border rounded-lg my-5 flex items-center justify-center flex-col gap-1">
        <div className="bg-[#FAF8F3] rounded-full h-[71px] w-[71px] flex items-center justify-center">
          <MapPin color="#34A853" />
        </div>
        <p>No Business to display for now.</p>
        <p>Don’t forget to check back soon</p>
      </div>
    </div>
  );
}

export default MapLocations;
