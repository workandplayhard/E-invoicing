import React from 'react';
import cn from 'classnames';
import { View } from 'react-native';

import { Typography } from 'components/shared/Typography';

import styles from './Cell.styles';

const Cell = ({ children, style, minWidth, maxWidth, ...restProps }) => (
  <View {...restProps} style={[styles.cell, style, { minWidth, maxWidth }]}>
    <Typography style={styles.text}>{children}</Typography>
  </View>
);

export default React.memo(Cell);
