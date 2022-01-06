import React from 'react';
import { Button, useTheme } from 'react-native-paper';

interface Props {
  title: string;
  onPress: () => void;
}

const CustomButton = ({ title, onPress }: Props) => {
  const theme = useTheme();

  return (
    <Button
      style={{ marginTop: 15 }}
      color={theme.colors.primary}
      mode="contained"
      onPress={() => onPress()}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
