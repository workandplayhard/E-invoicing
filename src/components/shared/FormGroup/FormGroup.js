import React from 'react';
import { View } from 'react-native';

import styles from './FormGroup.styles';

const FormGroup = ({ style, leftComponent, rightComponent }) => (
  <View style={[styles.group, style]}>
    <View style={[styles.groupItem, styles.firstGroupItem]}>
      {leftComponent}
    </View>
    <View style={styles.groupItem}>{rightComponent}</View>
  </View>
);

export default React.memo(FormGroup);
