import '../styles/globals.css';
import Amplify from 'aws-amplify';
import 'antd/dist/antd.css';
import awsconfig from '../utils/aws-exports';
Amplify.configure(awsconfig);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
