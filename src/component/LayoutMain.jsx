import { useEffect, useState } from "react";
import {
  Outlet,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

const LayoutMain = (props) => {
  const navigate = useNavigate();

  return (
    <div className="component-one-container">
      <h1 className="component-one-text">Component One {props.data}</h1>
      <button
        onClick={() => {
          navigate("/layout/five", {
            state: "state set from navigate",
          }); /** goes exaclty to this url */
        }}
        className="component-one-button"
      >
        navigate
      </button>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default function Test() {}
export { LayoutMain };
