import PropTypes from "prop-types";
import { useContext } from "react";
import AuthContext from "../Providers/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  const location = useLocation();

  if (loading) {
    return <h2>Loading .. . .. . .. .. . </h2>;
  }

  if (!user) {
    return <Navigate to={"/log-in"} state={{from: location}} replace />;
  }

  if (user) {
    return children;
  }
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
