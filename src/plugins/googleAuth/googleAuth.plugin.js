import React, { useContext, useState } from 'react';

const GoogleAuthContext = React.createContext();

export const useGoogleAuth = () => useContext(GoogleAuthContext);

export function useGoogleAuthInternal() {
  const [user, setAuth] = useState();

  // do business logig here.

  return {
    googleUser: user,
  };
}

const AuthProvider = ({ children }) => (
  <GoogleAuthContext.Provider value={useGoogleAuthInternal()}>
    {children}
  </GoogleAuthContext.Provider>
);

export default {
  init({ providers }) {
    providers.registerProvider(AuthProvider);
  },
};
