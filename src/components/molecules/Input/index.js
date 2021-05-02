import React from 'react';

import { InputText } from './styles';

export const Input = ({ placeholder, onChangeText }) => {
  return (
    <InputText
      placeholder={placeholder}
      placeholderTextColor="whitesmoke"
      onChangeText={onChangeText}
    />
  );
};
