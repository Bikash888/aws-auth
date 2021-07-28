import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from './authContext'

const PrivateRoute = (AuthenticatedComponent) => {
  
  const PrivateRouteComponent = ({ children }) => {
    const { authenticated ,user} = useContext(AuthContext);
    console.log("is authenticated",authenticated,"-->",user)
    const router = useRouter();
    useEffect(() => {
      if (user) {
        console.log("user is commming")
      } 
     
      if (authenticated && user) {
      router.push("/dashboard")
      } else if( !authenticated && user) {
        router.push("/login")
      }
      
    }, [authenticated,user])
    return(
      <>{ children}</>
    )
    
  }
  return class Higher extends React.Component{
    render() {
      return (
        <PrivateRouteComponent>
          <AuthenticatedComponent {...this.props}/>
        </PrivateRouteComponent>
      )
    }
  }
  
}

export default PrivateRoute;
