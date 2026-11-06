import * as PropTypes from 'prop-types';
import { createContext, useContext, useMemo, useState } from 'react';

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [state] = useState();

  const value = useMemo(
    () => ({
      state,
    }),
    [state]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export const useAppContext = () => useContext(AppContext);

AppContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
