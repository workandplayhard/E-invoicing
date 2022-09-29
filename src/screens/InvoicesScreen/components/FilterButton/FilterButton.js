import React from 'react';
import { TouchableOpacity } from 'react-native';

import FilterIcon from 'assets/icons/filter.svg';

import { Typography } from 'components/shared/Typography';

import styles from './FilterButton.styles';

const FilterButton = ({ onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <FilterIcon style={styles.icon} />
    <Typography style={styles.text}>تصفية البحث</Typography>
  </TouchableOpacity>
);

export default React.memo(FilterButton);
