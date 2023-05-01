import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./auth/LoginButtont";
import LogoutButton from "./auth/LogoutButton";

const Landing = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className=" flex h-screen w-screen">
      <div className="bg-black grow"></div>
      <div className="bg-red-200 grow flex items-center">
        {isAuthenticated ? <LogoutButton /> : <LoginButton />}
      </div>
    </div>
  );
};

export default Landing;
