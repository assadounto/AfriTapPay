import * as React from 'react';
import {StatusBar, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WalkThrough from 'screens/auth/WalkThrough';
import Main from './main';

const Stack = createStackNavigator();

const ApplicationNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}>
        <Stack.Screen name="main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
