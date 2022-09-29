import React from 'react';
import { View } from 'react-native';

import CalendarIcon from 'assets/icons/calendar.svg';

import { Typography } from 'components/shared/Typography';

import styles from './DatePickerInput.styles';

const DatePickerInput = ({ style, placeholder }) => (
  <View style={[styles.input, style]}>
    <CalendarIcon style={styles.icon} />
    <Typography style={styles.placeholder}>{placeholder}</Typography>
  </View>
);

export default React.memo(DatePickerInput);
