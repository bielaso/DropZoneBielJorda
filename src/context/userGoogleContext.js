import React, {useState } from 'react';

const Context = React.createContext({});


// https://www.youtube.com/watch?v=VT5S9Y49SYs

// credential: 
//     accessToken: "ya29.a0ARrdaM_S3SkuORciF_haK_P1IrzxaMe8bUZhJEurhvAciy5iyvUGkyxa7BCISigH8JB9lwd6uz2e5fnKKlMq-BoPFrsY32xbk564Gfiu-Wg-pdJoed0iYYCm0k6lCCQ8D5GJKj9jWEQyPo58Ke6kOhvk0nSPJw"
//     idToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6IjU4MGFkYjBjMzJhMTc1ZDk1MGExYzE5MDFjMTgyZmMxNzM0MWRkYzQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMTAzNzM0OTY3NDM1Ny1obGRncHY5YnA0MmcxZWRnbjN1aWRjNjlxcG1vc2lrYy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjEwMzczNDk2NzQzNTctaGxkZ3B2OWJwNDJnMWVkZ24zdWlkYzY5cXBtb3Npa2MuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDEwNjA0OTQxMTI4MzM4MjA4OTEiLCJlbWFpbCI6ImJpZWxqb3JkYTRAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF0X2hhc2giOiJNbDNHbXhycVdiR3dhMGJBRUlJRlhBIiwiaWF0IjoxNjU1NTY3ODQ0LCJleHAiOjE2NTU1NzE0NDR9.BhIsTRC9kNms_EWHyBNDgQ4MmLuKQdyXm6dE_WFbbXrEhwAZTPDVNWJEH4dlK15Dt2yQix85OY94r_vQlBD_beOuWIcJRcNxU9IIzrb3lPMMHVUptMTWeZm6RlphPd_S4RU83GabsLh91LnBvjo4j4nKKSLtM7toypi6Yf5o6TA84qLtczcj-XbV273hGYOJ_nPc3tQxtMfwk0tE2rT5hKdDDaOp1_zB5ppd6_WF5cwM0ioPHPyGgc7NIjzOLHrlc-w5dkWV2bPhlw_Difr-vtDabFjwRyJwaoUzdPw34N2mad-TWhCHykJZnkDzPzKSUkZh6SclN-8kN40nCO14Zw"
//     providerId: "google.com"

export function UserContextProvider({children}) {

  const [userGoogle, setUserGoogle] = useState( ()=> window.sessionStorage.getItem('userGoogle'));
  
  return <Context.Provider value={{userGoogle, setUserGoogle}}>
    {children}
  </Context.Provider>
}

export default Context;