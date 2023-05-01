import BusinessAtv from "./BusinessATV";
import BusinessFacturas from "./BusinessFacturas";
import BusinessFacturacion from "./BusinessFacturacion";
import BusinessTravi from "./BusinessTravi";
import BusinessCCSS from "./BusinessCCSS";
import BusinessINS from "./BusinessINS";
import NavBar from "../NavBar";

const BusinessForm = () => {
  return (
    <div className="bg-[#6c94b3] flex flex-col gap-4 w-screen h-screen">
      <NavBar />
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
