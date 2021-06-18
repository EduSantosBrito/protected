import auth from "@brito/auth";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const ProtectedPage = () => {
  const history = useHistory();

  const onLogout = () => {
    auth.logout();

    // LIMITATION: We have to choose between using window.location
    // to redirect between projects OR not using basename in BrowserRouter
    // and create a prefix on every route path in the project
    // Example:
    // In this project the routes path would be "protected/" instead "/"
    // and "protected/subroute" instead "/subroute"
    window.location = "/login";
  };

  return (
    <div>
      <h1>Protected page</h1>
      <button type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
};

export default ProtectedPage;
