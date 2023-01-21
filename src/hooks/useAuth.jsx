import { useEffect, useState } from 'react';

const useAuth = (allowedRoles) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    // fetch the user role from the server or from local storage
    const currentRole = localStorage.getItem("role")
    console.log(currentRole)

    const getUserRole = async () => {
      const role = 'admin'; // Example: get the user role from the server or local storage
      setUserRole(currentRole);
      if (allowedRoles.includes(currentRole)) {
        setIsAuthenticated(true);
      }
    };
    getUserRole();
  }, [allowedRoles]);

  return { isAuthenticated, userRole };
};

export default useAuth;