import { Navigate, Outlet, useLocation } from "react-router";

function PrivateRouting() {
  const location = useLocation();
  if (user==null) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  } else {
    return <Outlet />;
  }
}

export default PrivateRouting;