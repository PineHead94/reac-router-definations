import { useRoutes } from "react-router-dom";
import { LayoutMain } from "./LayoutMain";
import { ComponentFour, ComponentThree, LoaderData } from "./Components";
/** this approach only replaces <Route> components nested inside <Routes /> component , further implementation like use of a router or a  data router remains a developer's choice */
function RoutesHook() {
  const routesForUseRoutes = useRoutes([
    {
      element: <LayoutMain /> /** layout */,
      path: "/",
      children: [
        /** nested components, routes */
        {
          index: true,
          element: <LoaderData />,
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
    <Route path="/" element={<LayoutMain />}>
      <Route index element={<LoaderData />} />
      <Route path="three" element={<ComponentThree />} />
    </Route>
      <Route path="/four" element={<ComponentFour />}>
    </Route>
</Routes>
*/
/** export here has Routes and Route Component in it, only a router is needed, export here has Routes and Route Component in it, only a router is needed */
export { RoutesHook };
