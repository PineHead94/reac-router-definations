import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const ComponentOne = (props) => {
  useEffect(() => {
    console.log(props);
  }, []);
  return (
    <div className="component-one-container">
      <h1 className="component-one-text">Component One</h1>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export { ComponentOne };
