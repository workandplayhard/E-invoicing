import React from 'react';
import { TouchableOpacity, ActivityIndicator } from 'react-native';

import { Typography } from 'components/shared/Typography';

import styles from './Button.styles';

const Button = ({ children, loading, disabled, style, onPress }) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={[styles.button, disabled && styles.buttonDisabled, style]}>
    {loading ? (
      <ActivityIndicator />
    ) : (
      <Typography weight="bold" style={styles.text}>
        {children}
      </Typography>
    )}
  </TouchableOpacity>
);

export default React.memo(Button);
