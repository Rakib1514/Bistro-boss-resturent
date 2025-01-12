import { Navigate, useLocation,  } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useAuth from "../Hooks/useAuth";
import PropTypes from "prop-types";

const AdminRoutes = ({children}) => {
  const { user, loading } = useAuth();
  const { isAdminLoading, isAdmin } = useAdmin();

  const location = useLocation();

  if (loading || isAdminLoading) {
    return <h2> Loading in admin private route</h2>;
  }

  if (isAdmin && user) {
    return children;
  }

  return <Navigate to="/log-in" state={{ from: location }} replace />;
};

AdminRoutes.propTypes = {
  children: PropTypes.node,
};

export default AdminRoutes;
