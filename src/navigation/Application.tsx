import * as React from 'react';
import {StatusBar, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Main from './main';

const Stack = createStackNavigator();

const ApplicationNavigator: React.FC = () => {
  return (

      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {
            backgroundColor: '#fff',
          },
        }}>
        <Stack.Screen name="main" component={Main} />
      </Stack.Navigator>
  );
};

export default ApplicationNavigator;
