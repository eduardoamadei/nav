import { SafeAreaProvider } from 'react-native-safe-area-context';
import Route from './src/screens/Routes';

export default function App() {

  return (
    <SafeAreaProvider>
            <Route></Route>
    </SafeAreaProvider>


  );
}

