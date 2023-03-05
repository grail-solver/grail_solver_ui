import React, { createContext, useMemo, useState } from 'react';

const ExpandContext = createContext({
  bloc_id: 0,
  expand: false,
  setBlocId: () => {},
  setExpand: () => {}
});

function ExpandContextProvider({children}) {
  const [bloc_id, setBlocId] = useState(0);
  const [expand, setExpand] = useState(false);

const contextValue = useMemo(() => ({
    bloc_id,
    expand,
    setBlocId,
    setExpand
}), [bloc_id, expand]);

  return (
    <ExpandContext.Provider value={contextValue}>
      {children}
    </ExpandContext.Provider>
  );
}


export { ExpandContext, ExpandContextProvider };

