import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Home';
import ResultScreen from './Results';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Page() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:true}}>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: "Starcast" }}/>
        <Stack.Screen name='Results' component={ResultScreen} options={{ title: "Back", headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}