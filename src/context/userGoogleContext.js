import React, {useState } from 'react';

const Context = React.createContext({});


// https://www.youtube.com/watch?v=VT5S9Y49SYs

export function UserContextProvider({children}) {

  const [userGoogle, setUserGoogle] = useState( ()=> window.sessionStorage.getItem('userGoogle'));
  
  return <Context.Provider value={{userGoogle, setUserGoogle}}>
    {children}
  </Context.Provider>
}

export default Context;