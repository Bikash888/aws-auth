import Amplify, { Auth } from 'aws-amplify';
Amplify.configure({
  Auth: {
    identityPoolId: "us-west-2_Hv6Ow8c4r",
    region:"US West (Oregon)us-west-2"
  }
})

export const currentConfig = Auth.configure();