import useRouteElements from "src/routers/routeElements";
import "./App.scss";

function App() {
  const routeElements = useRouteElements();
  return <>{routeElements}</>;
}

export default App;
