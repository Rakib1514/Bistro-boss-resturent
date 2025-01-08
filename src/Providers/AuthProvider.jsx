import PropTypes from "prop-types";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {

  const authData={
    user: null
  }
  
  return (
    <AuthContext.Provider value={authData}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
