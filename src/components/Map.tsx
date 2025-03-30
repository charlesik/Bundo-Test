"use client";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Loader, MapPin, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import AddBusinessLocationForm from "./AddBusinessLocation";
import { getBusinessLocations } from "@/services";
type businessLocations = {
  updatedAt: string;
  createdAt: string;
  ttl: number;
  businessName: string;
  address: string;
  id: string;
  lat: number;
  long: number;
};
function MapLocations() {
  const containerStyle = {
    width: "100%",
    height: "678px",
    borderRadius: "10px",
    marginTop: "15px",
  };
  const [isLoading, setIsLoading] = useState(false);
  const [businessLocations, setBusinessLocations] = useState<
    businessLocations[]
  >([]);
  const getLocations = async () => {
    try {
      setIsLoading(true);
      const result = await getBusinessLocations();
      console.log("hiyaaa", result);
      setBusinessLocations(result?.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  const lastLocation = businessLocations[businessLocations.length - 1];
  console.log("last", lastLocation);
  const center = {
    lat: lastLocation?.lat,
    lng: lastLocation?.long,
  };
  const [addBizOpen, setAddBizOpen] = useState(false);
  useEffect(() => {
    getLocations();
  }, []);
  return (
    <LoadScript
      googleMapsApiKey={"AIzaSyAgMizQi7APptUD5j_GJcguTz-0LK3VC2Q"}
      libraries={["places"]}
    >
      <div className="p-3 lg:px-[80px] py-10">
        <div className="flex justify-between">
          <p className="font-[500] text-[24px]">Explore Business</p>

          <Dialog onOpenChange={setAddBizOpen} open={addBizOpen}>
            <DialogTrigger asChild onClick={() => setAddBizOpen(true)}>
              <button className="flex bg-[#34A853] p-3 text-white rounded-lg cursor-pointer">
                <Plus /> Add Businness
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Add New Business</DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <AddBusinessLocationForm setAddBizOpen={setAddBizOpen} />
              <DialogFooter></DialogFooter>
            </DialogContent>
          </Dialog>
        </div>

        {businessLocations.length > 0 && !isLoading ? (
         
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={10}
            >
              {businessLocations.map((location, index) => (
                <Marker
                  key={index}
                  position={{ lat: location.lat, lng: location.long }}
                  title={location.businessName}
                />
              ))}
            </GoogleMap>
          
        ) : (
          <div className="h-[678px] border rounded-lg my-5 flex items-center justify-center flex-col gap-1">
            <div className="bg-[#FAF8F3] rounded-full h-[71px] w-[71px] flex items-center justify-center">
              <MapPin color="#34A853" />
            </div>
            {isLoading ? (
              <Loader />
            ) : (
              <div>
                <p>No Business to display for now.</p>
                <p>Don’t forget to check back soon</p>
              </div>
            )}
          </div>
        )}
      </div>
    </LoadScript>
  );
}

export default MapLocations;
