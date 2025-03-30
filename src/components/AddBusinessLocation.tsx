"use client";
import { createLocation } from "@/services";
import { Dispatch, SetStateAction, useState } from "react";
import SearchBox from "./SearchBox";
import { toast } from "react-toastify";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader} from "lucide-react";

const AddBusinessLocationForm = ({setAddBizOpen}:{setAddBizOpen:Dispatch<SetStateAction<boolean>>}) => {
  const [formData, setFormData] = useState({
    id: "",
    lat: 0,
    long: 0,
    businessName: "",
    address: "",
    businessProfilePicture: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handlePlaceSelect = (locationData: {
    id: string;
    lat: number;
    long: number;
    address: string;
  }) => {
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
      setIsLoading(true);
      const result = await createLocation(formData);
      toast(result?.message);
      setIsLoading(false);
      setAddBizOpen(false)
      window.location.reload()
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <SearchBox onPlaceSelect={handlePlaceSelect} />
      <label className="text-[#504E49] text-[12px] font-[400]">
        Business Name
      </label>

      <Input
        type="text"
        name="businessName"
        placeholder="Business Name"
        value={formData.businessName}
        onChange={handleChange}
        required
        className="h-[42px] my-2"
      />
      <label className="text-[#504E49] text-[12px] font-[400]">
        Business Profile Picture
      </label>
      <Input
        type="text"
        name="businessProfilePicture"
        placeholder="Image Link"
        value={formData.businessProfilePicture}
        onChange={handleChange}
        required
        className="h-[42px] my-2"
      />
      <Button
        type="submit"
        disabled={
          !formData.id ||
          !formData.businessName ||
          !formData.businessProfilePicture
        }
        className="w-full my-2 bg-[#34A853] cursor-pointer"
      >
        {isLoading ? <Loader />: "Save Business"}
      </Button>
    </form>
  );
};
export default AddBusinessLocationForm;
