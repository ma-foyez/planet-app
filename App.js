import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/theme/colors';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    'Antonio-Bold': require('./assets/fonts/Antonio-Bold.ttf'),
    'Antonio-Medium': require('./assets/fonts/Antonio-Medium.ttf'),
    'LeagueSpartan-Bold': require('./assets/fonts/LeagueSpartan-Bold.ttf'),
    'LeagueSpartan-Regular': require('./assets/fonts/LeagueSpartan-Regular.ttf')
  })

  if(!loaded){
    return <Text>Font is loading...</Text>
  }
  return (
    <View style={styles.container}>
      <Text style={{fontFamily: "Antonio-Medium", fontSize: 22}}>Welcome to React Native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkOrange,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
