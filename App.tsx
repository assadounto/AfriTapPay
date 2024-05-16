import Index from 'navigation';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@rneui/themed';
import {theme} from 'theme/Theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Index />
      </NavigationContainer>
    </ThemeProvider>
  );
}

export default App;
