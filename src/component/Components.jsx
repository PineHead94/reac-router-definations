import { useEffect } from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

function LoaderData() {
  const loaderData = useLoaderData();
  return (
    <div className="component-two-container">
      <h1 className="component-two-text">Component Two</h1>
      {loaderData ? (
        <div>
          <p>User Id: {loaderData.userId}</p>
          <p>Id: {loaderData.id}</p>
          <p>Title: {loaderData.title}</p>
          <p>Completed: {loaderData.completed ? "true" : "false"}</p>
        </div>
      ) : (
        <>Loading..</>
      )}
    </div>
  );
}

function ComponentThree() {
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/2`);
  }, []);
  return (
    <div className="component-three-container">
      <h1 className="component-three-text">Component Three</h1>
    </div>
  );
}

function ComponentFour() {
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/2`);
  }, []);
  return (
    <div className="component-four-container">
      <h1 className="component-four-text">Component Four</h1>
    </div>
  );
}

function DynamicSegment() {
  const navigate = useNavigate();
  const loaderData = useLoaderData();
  useEffect(() => {
    console.log(loaderData);
  }, []);
  return (
    <div className="component-four-container">
      <h1 className="component-four-text">Component Five</h1>
      <button
        onClick={() => {
          navigate("/layout/2", {
            state: "state set from navigate",
          });
          /** goes exaclty to this url */
        }}
        className="component-one-button"
      >
        navigate
      </button>
    </div>
  );
}

function ComponentSix() {
  return (
    <div className="component-four-container">
      <h1 className="component-four-text">Component Six</h1>
    </div>
  );
}

function SearchParams() {
  const params = useParams();
  const [urlSearchParams] = useSearchParams();
  useEffect(() => {
    console.log(params, urlSearchParams.toString());
  }, []);
  return (
    <div className="component-four-container">
      <h1 className={`"component-four-text"`}>Component Six?/Seven</h1>
    </div>
  );
}

function OptionalSegment() {
  const navigate = useNavigate();
  return (
    <div className="component-four-container">
      <h1 className={`"component-four-text"`}>Component Eight</h1>
      <button
        onClick={() => {
          navigate("/", {
            state: "state set from navigate again, changed to root",
          }); /**adds to url */
          // navigate("/layout/five" );
          /** goes exaclty to this url */
        }}
        className="component-one-button"
      >
        navigate
      </button>
    </div>
  );
}

function Splat_Navigate() {
  const navigate = useNavigate();

  return (
    <div className="component-four-container">
      <h1 className={`"component-four-text"`}>Component Nine</h1>
      <button
        onClick={() => {
          navigate("/layout/five/seven/eight", {
            state: "state set from navigate again, changed",
          });
          /** goes exaclty to this url */
        }}
        className="component-one-button"
      >
        navigate
      </button>
    </div>
  );
}

export {
  LoaderData,
  ComponentThree,
  ComponentFour,
  DynamicSegment,
  ComponentSix,
  SearchParams,
  OptionalSegment,
  Splat_Navigate,
};
