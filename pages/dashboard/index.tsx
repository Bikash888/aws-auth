import React from 'react';
import { Auth } from 'aws-amplify';
import PrivateRoute from '../../utils/privateRoute';
import { useRouter } from 'next/router';
import { Button } from 'antd';

const Dashboard = () => {
  const router = useRouter();
  const showCurrentUser = async () => {
    try {
      console.log( await Auth.currentAuthenticatedUser())
    } catch (err) {
      console.log(err)
    }
    
  }
  showCurrentUser();
  return (
    <div>
      <p>Welcome to aws-auth---</p>
      <Button onClick={() => { Auth.signOut({ global: true });router.push("/")}}>sign out</Button>
    </div>
  )
}

export default PrivateRoute (Dashboard)
