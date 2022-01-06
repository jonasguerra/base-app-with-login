import {
  NunitoSans_300Light,
  NunitoSans_400Regular,
  NunitoSans_600SemiBold,
} from '@expo-google-fonts/nunito-sans';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import React from 'react';
import { StatusBar } from 'react-native';
import {
  Provider as PaperProvider,
  withTheme,
} from 'react-native-paper';
import { ThemeProvider } from 'styled-components/native';
import PaperTheme from './src/global/theme/theme';
import Login from './src/views/Login';

const App = () => {
  const [fontsLoaded] = useFonts({
    'NunitoSans-Regular': NunitoSans_400Regular,
    'NunitoSans-SemiBold': NunitoSans_600SemiBold,
    'NunitoSans-Light': NunitoSans_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={PaperTheme}>
      <PaperProvider theme={PaperTheme}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Login />
      </PaperProvider>
    </ThemeProvider>
  );
};

export default withTheme(App);
