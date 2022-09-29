import React from 'react';
import { View, TextInput } from 'react-native';

import styles from './Input.styles';

const Input = ({
  style,
  fieldStyle,
  placeholder,
  value,
  startAdornment,
  startAdornmentStyle,
  endAdornment,
  endAdornmentStyle,
  onChange,
  ...restProps
}) => (
  <View style={[styles.input, style]}>
    {startAdornment && (
      <View style={[styles.startAdornment, startAdornmentStyle]}>
        {startAdornment}
      </View>
    )}
    <TextInput
      {...restProps}
      style={[styles.field, fieldStyle]}
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
    />
    {endAdornment && (
      <View style={[styles.endAdornment, endAdornmentStyle]}>
        {endAdornment}
      </View>
    )}
  </View>
);

export default React.memo(Input);
