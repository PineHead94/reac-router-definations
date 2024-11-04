import "./App.css";
import * as ComponentForNesting from "./component/LayoutMain";
import {
  LoaderData,
  ComponentThree,
  ComponentFour,
  DynamicSegment,
  ComponentSix,
  SearchParams,
  OptionalSegment,
  Splat_Navigate,
} from "./component/Components";
import {
  BrowserRouter /** does not supports data apis */,
  createBrowserRouter /** supports data apis */,
  RouterProvider,
  createRoutesFromElements /** to create routes from, <Route /> element, not route config */,
  Route /** to map paths to correponding components and facilitate nesting which goes to Routes Component for rendering, layouts and  outlets, data loading and data mutations. which goes to data router */,
  Routes /** only use of Routes is to make a route config or routing tree (array), it looks through all its child routes to find the best match and renders that branch of the UI. it only returns one component as it is functional equivalent to useRoutes  */,
  useRoutes /** this hook is used to make a component that is functional euivalent to <Routes/> */,
  createHashRouter,
  json,
} from "react-router-dom";
import { RoutesHook } from "./component/RoutesHooks";
import { useEffect } from "react";
import ErrorComponent from "./component/ErrorComponent";

const router = createBrowserRouter(
  /** by default takes route config */
  createRoutesFromElements(
    /** co-relates with Routes component, returns route config */
    <Route>
      <Route path="/" element={<ComponentForNesting.LayoutMain />}>
        <Route
          index
          element={<LoaderData />}
          loader={async () => {
            // let data = await fetch(
            //   "https://jsonplaceholder.typicode.com/todos/1"
            // );
            // let response = data.json();
            // return response;
            return fetch("https://jsonplaceholder.typicode.com/todos/1")
              .then((data) => data.json())
              .then((data) => data);
          }}
          errorElement={<ErrorComponent />}
        />
        <Route path="three" element={<ComponentThree />} />
      </Route>
      <Route
        path="layout"
        element={<ComponentForNesting.LayoutMain data="Layout" />}
      >
        <Route index element={<ComponentFour />} />
        <Route
          path=":number"
          element={<DynamicSegment />}
          loader={({ params }) => {
            return {
              data: "test",
              ...params,
            };
          }}
        />
        <Route path=":number/six" element={<ComponentSix />} />
        <Route path=":number/six?/seven" element={<SearchParams />} />
        <Route
          path=":number/six?/seven/:number2"
          element={<OptionalSegment />}
        />
        <Route path=":number/*" element={<Splat_Navigate />} />
      </Route>
    </Route>
  ),
  {
    basename: "/app",
    /** index page will be rendered on localhost:3000/app rather than localhost:3000 */
  }
);

function App() {
  return (
    <div className="App">
      <div className="app-component-main-container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
