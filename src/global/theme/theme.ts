import { configureFonts, DefaultTheme } from 'react-native-paper';
import fontConfig from './fonts';

const PaperTheme = {
  ...DefaultTheme,
  dark: false,
  roundness: 4,
  colors: {
    ...DefaultTheme.colors,
    primary: '#922c88',
    secondary: '#3a3a3a',
    valid: '#4CAF50',
    warning: '#FF9800',
    error: '#F44336',
    background: '#FFFFFF',
    placeholder: '#1116383B',
    negativeActions: '#F88078',
    divider: '#d7d7d7',
    disabled: 'rgba(17, 22, 56, 0.26)',
  },
  fonts: configureFonts(fontConfig),
  animation: {
    scale: 1.0,
  },
};

export default PaperTheme;
