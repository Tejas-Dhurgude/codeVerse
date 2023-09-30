import React, { useState } from "react";
import UserLogin from "../components/login/UserLogin";
import AgencyLogin from "../components/login/AgencyLogin";

const Login = () => {
  const [isUserLogin, setIsUserLogin] = useState(true);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-600">
      {isUserLogin ? <UserLogin /> : <AgencyLogin />}
    </div>
  );
};

export default Login;
