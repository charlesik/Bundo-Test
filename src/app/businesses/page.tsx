
import MapLocations from "@/components/Map";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="">
       <ToastContainer
        position="top-right"
        />
      <MapLocations/>
    </div>
  );
}
