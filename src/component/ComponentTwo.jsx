import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function ComponentTwo() {
  const loaderData = useLoaderData();
  useEffect(() => {
    console.log(loaderData);
  }, []);
  return (
    <div className="component-two-container">
      <h1 className="component-two-text">Component Two</h1>
      <div>
        <p>User Id: {loaderData.userId}</p>
        <p>Id: {loaderData.id}</p>
        <p>Title: {loaderData.title}</p>
        <p>Completed: {loaderData.completed ? "true" : "false"}</p>
      </div>
    </div>
  );
}
