import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Typography } from 'components/shared/Typography';

import styles from './ActionItem.styles';

const ActionItem = ({ style, text, iconComponent: IconComponent, onPress }) => (
  <TouchableOpacity style={[styles.item, style]} onPress={onPress}>
    <IconComponent style={styles.icon} />
    <Typography style={styles.text} weight="bold">
      {text}
    </Typography>
  </TouchableOpacity>
);

export default React.memo(ActionItem);
