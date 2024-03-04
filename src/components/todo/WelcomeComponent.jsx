import React from "react";
import { Link, useParams } from "react-router-dom";

const WelcomeComponent = () => {
  const { username } = useParams();

  return (
    <div classname="Welcome">
      <h1>Welcome {username}</h1>
      <div>
        Manage your Todos here: <Link to="/todos">Go here </Link>
      </div>
    </div>
  );
};

export default WelcomeComponent;
