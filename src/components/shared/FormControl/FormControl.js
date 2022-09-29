import React from 'react';
import { View } from 'react-native';

import { Typography } from 'components/shared/Typography';

import styles from './FormControl.styles';

const FormControl = ({
  children,
  style,
  haveError,
  required,
  error,
  label,
  labelStyle,
}) => (
  <View style={[styles.control, style]}>
    {label && (
      <Typography style={[styles.label, labelStyle]}>
        {label}{' '}
        {required && (
          <Typography style={styles.labelRequiredMark}>*</Typography>
        )}
      </Typography>
    )}
    {children}
    {haveError && error && (
      <Typography style={styles.errorText} weight="medium">
        {error}
      </Typography>
    )}
  </View>
);

export default React.memo(FormControl);
