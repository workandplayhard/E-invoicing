import React from 'react';
import { TouchableOpacity } from 'react-native';

import styles from './FloatButton.styles';

const FloatButton = ({ style, iconComponent: IconComponent }) => (
  <TouchableOpacity style={[styles.button, style]}>
    <IconComponent style={styles.icon} />
  </TouchableOpacity>
);

export default React.memo(FloatButton);
