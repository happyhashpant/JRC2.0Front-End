import BusinessAtv from "./BusinessAtv";
import { useState } from "react";
import BusinessFacturas from "./BusinessFacturas";
import BusinessFacturacion from "./BusinessFacturacion";
import BusinessTravi from "./BusinessTravi";
import BusinessCCSS from "./BusinessCCSS";
import BusinessINS from "./BusinessINS";

const BusinessForm = () => {
  const [answer, setAnswer] = useState("");

  // const handleInputChange = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   const { name, value } = event.target;
  //   setState({ ...state, [name]: value });
  // };

  return (
    <div className="bg-[#6c94b3]  p-4 flex flex-col gap-4 w-screen h-screenm ">
      <BusinessAtv></BusinessAtv>
      <BusinessFacturas></BusinessFacturas>
      <BusinessFacturacion></BusinessFacturacion>
      <BusinessTravi></BusinessTravi>
      <BusinessCCSS></BusinessCCSS>
      <BusinessINS></BusinessINS>
    </div>
  );
};

export default BusinessForm;
