import { useRoutes } from "react-router-dom";
import { ComponentOne } from "./ComponentOne";
import { ComponentFour, ComponentThree, ComponentTwo } from "./Components";
/** this approach only replaces <Route> components nested inside <Routes /> component , further implementation like use of a router or a  data router remains a developer's choice */
function RoutesHook() {
  const routesForUseRoutes = useRoutes([
    {
      element: <ComponentOne /> /** layout */,
      path: "/",
      children: [
        /** nested components, routes */
        {
          index: true,
          element: <ComponentTwo />,
        },
        {
          path: "three",
          element: <ComponentThree />,
        },
      ],
    },
    {
      element: <ComponentFour /> /** layout */,
      path: "/four",
      children: [],
    },
  ]);
  return routesForUseRoutes;
}
/**
RoutesHook(react component) is equivalent to --
<Routes>
    <Route path="/" element={<ComponentOne />}>
      <Route index element={<ComponentTwo />} />
      <Route path="three" element={<ComponentThree />} />
    </Route>
      <Route path="/four" element={<ComponentFour />}>
    </Route>
</Routes>
*/
/** export here has Routes and Route Component in it, only a router is needed, export here has Routes and Route Component in it, only a router is needed */
export { RoutesHook };
