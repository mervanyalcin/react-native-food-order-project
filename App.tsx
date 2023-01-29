import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//Pages
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';

interface Item {
  key: string;
}

export type RootParamList = {
  Home: undefined; 
  DetailScreen: undefined;
};

const Stack = createNativeStackNavigator<RootParamList>();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="DetailScreen"
          component={DetailScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
