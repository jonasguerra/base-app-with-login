import React from 'react';
import { Control, Controller } from 'react-hook-form';
import { TextInput } from 'react-native-paper';
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput';
import { Error } from './styles';

interface Props extends TextInputProps {
  name: string;
  label: string;
  control: Control<any>;
  errorMessage?: string;
}

const TextField = ({
  name,
  label,
  control,
  errorMessage,
  ...rest
}: Props) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            mode="outlined"
            autoComplete
            label={label}
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
      />
      {errorMessage && <Error>{errorMessage}</Error>}
    </>
  );
};

export default TextField;
