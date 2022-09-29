import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Typography } from 'components/shared/Typography';

import styles from './Link.styles';

const Link = ({ children, style, textStyle, onPress }) => (
  <TouchableOpacity style={[styles.link, style]} onPress={onPress}>
    <Typography weight="medium" style={[styles.text, textStyle]}>
      {children}
    </Typography>
  </TouchableOpacity>
);

export default React.memo(Link);
