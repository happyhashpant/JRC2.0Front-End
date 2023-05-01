import React, { useState } from "react";
import DropDownBottom from "../../icons/DropDownButton";

const BusinessINS = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [datos, setDatos] = useState({ user: "", password: "" });

  const HandleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setDatos({ ...datos, [name]: value });
  };

  return (
    <div className="bg-[#d9d9d9] flex flex-wrap flex-col drop-shadow-lg max-w-lg  rounded-lg ">
      <div
        className={`bg-gray-400 flex p-2 pl-4 ${
          isMenuOpen ? "rounded-t-lg" : "rounded-lg"
        }`}
      >
        <p className="">INS</p>
        <div className=" flex flex-grow ">
          <DropDownBottom
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </div>
      <div className={`flex w-full  ${isMenuOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col p-4 w-full">
          <label htmlFor="user">Usuario</label>
          <form action="" method="get">
            <input
              type="text"
              id="user"
              name="user"
              className="bg-white  border-gray-400 p-2 rounded-lg w-full"
              onChange={HandleInputChange}
            ></input>
          </form>
        </div>
        <div className="flex flex-col p-4 w-full">
          <form action="" method="get">
            <label htmlFor="password">Contrasena</label>
            <input
              type="text"
              id="password"
              name="password"
              className="bg-white  border-gray-400  p-2 rounded-lg w-full "
              onChange={HandleInputChange}
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BusinessINS;
