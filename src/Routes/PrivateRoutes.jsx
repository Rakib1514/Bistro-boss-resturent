import PropTypes from "prop-types";
import { useContext } from "react";
import AuthContext from "../Providers/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <h2>Loading .. . .. . .. .. . </h2>;
  }

  if (!user) {
    return <Navigate to={"/log-in"} />;
  }

  if (user) {
    return children;
  }
};

PrivateRoutes.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoutes;
