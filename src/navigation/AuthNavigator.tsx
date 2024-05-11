import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import WalkThrough from 'screens/auth/WalkThrough';

const Stack = createStackNavigator();

const AuthNavigator: React.FC = () => {
  const first_time = true;
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: {},
        }}>
        {/* {first_time ? ( */}
        <Stack.Screen name="TurnNotification" component={WalkThrough} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
