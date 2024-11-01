import "./App.css";
import { ComponentOne } from "./component/ComponentOne";
import {
  ComponentTwo,
  ComponentThree,
  ComponentFour,
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
  Router,
} from "react-router-dom";
import { RoutesHook } from "./component/RoutesHooks";
import { useEffect } from "react";

const router = createBrowserRouter(
  /** by default takes route config */
  createRoutesFromElements(
    /** co-relates with Routes component, returns route config */
    <Route>
      <Route path="/" element={<ComponentOne />}>
        <Route index element={<ComponentTwo />} />
        <Route path="three" element={<ComponentThree />} />
      </Route>
      <Route path="/four" element={<ComponentFour />} />
    </Route>
  ),
  {
    basename: "/app",
    /** index page will be rendered on localhost:3000/app rather than localhost:3000 */
  }
);

function App() {
  useEffect(() => {
    const fromElements = createRoutesFromElements(
      /** co-relates with Routes component, returns route config */
      <Route>
        <Route path="/" element={<ComponentOne />}>
          <Route index element={<ComponentTwo />} />
          <Route path="three" element={<ComponentThree />} />
        </Route>
        <Route path="/four" element={<ComponentFour />} />
      </Route>
    );
    console.log(fromElements);
  }, []);
  return (
    <div className="App">
      <div className="app-component-main-container">
        <RouterProvider router={router} />
      </div>
    </div>
  );
}

export default App;
