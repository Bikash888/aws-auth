import React, { Children, useEffect, useState } from 'react';
import { Auth } from 'aws-amplify';
import { notification} from 'antd';
import router from 'next/router';
interface IContextProps{
  user?: any;
  setUser?: any;
  authenticated?: any;
  setAuthenticated?: any;

}
 export const AuthContext = React.createContext<Partial<IContextProps>>({})
export const AuthProvider = (props: any) => {
  const [user, setUser] = useState();
  const [authenticated, setAuthenticated] = useState(null as boolean);
  const initalLoad = async () => {
    try {
      const user:any = await Auth.currentAuthenticatedUser();
      console.log("context user", user)
      
      if (user || user?.attributes?.email_verified) {
        setAuthenticated(true)
        setUser(user)
        
      }
      setUser(user)
      
    } catch (error) {
      
    }

  }

  useEffect(() => {
    initalLoad();
  }, [])
    
 console.log(authenticated,"Controller")

  return (
    <AuthContext.Provider value={{user,setUser,authenticated}} >
{props.children}
    </AuthContext.Provider>
  )
}


