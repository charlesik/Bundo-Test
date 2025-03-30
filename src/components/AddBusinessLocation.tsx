"use client"
import { createLocation } from "@/services";
import { useState } from "react";
import SearchBox from "./SearchBox";

 const AddBusinessLocationForm: React.FC = () => {
    const [formData, setFormData] = useState({
      id: '',
      lat: 0,
      long: 0,
      businessName: '',
      address: '',
      businessProfilePicture: '',
    });
  
    const handlePlaceSelect = (locationData: { id: string; lat: number; long: number; address: string }) => {
      setFormData((prev) => ({
        ...prev,
        id: locationData.id,
        lat: locationData.lat,
        long: locationData.long,
        address: locationData.address,
      }));
    };
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      try {
        const result = await createLocation(formData);
        alert('Location created successfully!');
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <SearchBox onPlaceSelect={handlePlaceSelect} />
        <input
          type="text"
          name="businessName"
          placeholder="Business Name"
          value={formData.businessName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="businessProfilePicture"
          placeholder="Profile Picture URL"
          value={formData.businessProfilePicture}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={!formData.id || !formData.businessName || !formData.businessProfilePicture}>
          Create Location
        </button>
      </form>
    );
  };
  export default AddBusinessLocationForm;