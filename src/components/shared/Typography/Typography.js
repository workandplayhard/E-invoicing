import React from 'react';
import { Text } from 'react-native';

import styles from './Typography.styles';

const WEIGHTS = {
  regular: styles.regular,
  bold: styles.bold,
};

const Typography = ({ style, children, weight, component, ...restProps }) => (
  <Text {...restProps} style={[styles.typography, WEIGHTS[weight], style]}>
    {children}
  </Text>
);

Typography.defaultProps = {
  weight: 'regular',
};

export default React.memo(Typography);
