import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WalkThrough from 'screens/auth/WalkThrough';

const Stack = createStackNavigator();

const AuthNavigator: React.FC = () => {
  const first_time = true;
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {},
      }}>
      <Stack.Screen name="WalkThrough" component={WalkThrough} />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
