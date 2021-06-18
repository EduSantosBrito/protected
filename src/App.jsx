import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const ProtectedPage = lazy(() => import("./components/ProtectedPage"));
const SubrouteProtectedPage = lazy(() =>
  import("./components/SubrouteProtectedPage")
);

const App = () => {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      window.location = "/login";
    }
  }, []);

  // eslint-disable-next-line camelcase
  const publicPath = __webpack_public_path__;

  return (
    <>
      <img src={`${publicPath}/images/logo.png`} alt="React logo" />
      <Suspense fallback={<h1>Carregando...</h1>}>
        <BrowserRouter basename="protected">
          <Switch>
            <Route exact path="/" component={ProtectedPage} />
            <Route exact path="/subroute" component={SubrouteProtectedPage} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </>
  );
};

export default App;
