// ColorProvider.js

import React, {createContext, useContext, useState, useEffect} from 'react';
import {useColorScheme} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ThemeContext = createContext();

const ColorProvider = ({children}) => {
  const systemTheme = useColorScheme();
  const [isDarkTheme, setIsDarkTheme] = useState(systemTheme === 'dark');

  useEffect(() => {
    loadThemeMode();
  }, [systemTheme, isDarkTheme]);

  const loadThemeMode = async () => {
    try {
      const savedThemeMode = await AsyncStorage.getItem('themeMode');
      if (savedThemeMode !== null) {
        setIsDarkTheme(savedThemeMode === 'dark');
      }
    } catch (error) {
      console.error('Error loading theme mode from AsyncStorage:', error);
    }
  };

  const saveThemeMode = async mode => {
    try {
      await AsyncStorage.setItem('themeMode', mode);
    } catch (error) {
      console.error('Error saving theme mode to AsyncStorage:', error);
    }
  };

  const toggleTheme = () => {
    setIsDarkTheme(prev => !prev);
    saveThemeMode(!isDarkTheme ? 'dark' : 'light');
  };

  const colors = getThemeColors(isDarkTheme);

  return (
    <ThemeContext.Provider value={{colors, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

const getThemeColors = isDarkTheme => {
  return {
    themeColor: isDarkTheme ? '#000000' : '#FFFFFF',
    white: '#FFFFFF',
    black: '#000000',
    lightGreen: isDarkTheme ? '#FFFFFF' : '#B0EBBD',
    darkGreen: isDarkTheme ? '#FFFFFF' : '#00463C',
    mediumGreen: isDarkTheme ? '#FFFFFF' : '#86D694',
    gray: '#BBB9BC',
    fadedGreen: '#D0D8C3',
    bg: '#EFEFEF',
    inputTheme: '#00463C',
  };
};

export {ColorProvider, useTheme};
