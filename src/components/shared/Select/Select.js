import React from 'react';
import { View } from 'react-native';

import ArrowIcon from 'assets/icons/angle-down.svg';

import { Typography } from 'components/shared/Typography';

import styles from './Select.styles';

const Select = ({ style, placeholder }) => (
  <View style={[styles.select, style]}>
    <ArrowIcon style={styles.icon} />
    <Typography style={styles.placeholder}>{placeholder}</Typography>
  </View>
);

export default React.memo(Select);
