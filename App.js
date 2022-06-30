import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import Text from './src/components/text/Text';
import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    'Antonio-Bold': require('./assets/fonts/Antonio-Bold.ttf'),
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'LeagueSpartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf')
  })

  if (!loaded) {
    return <Text>Font is loading...</Text>
  }
  return (
    <>
      <NavigationContainer theme={DarkTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style='light' />
    </>
  );
}
