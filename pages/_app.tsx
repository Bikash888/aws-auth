import '../styles/globals.css';
import Amplify,{Auth} from 'aws-amplify';
import 'antd/dist/antd.css';
import awsconfig from '../utils/aws-exports';

Amplify.configure(awsconfig);
import { AuthProvider } from '../utils/authContext';

function MyApp({ Component, pageProps  }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>)
}

export default MyApp
