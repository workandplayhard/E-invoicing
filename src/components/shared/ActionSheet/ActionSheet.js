import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import ReactActionSheet from 'react-native-actions-sheet';

import CloseIcon from 'assets/icons/close.svg';

import styles from './ActionSheet.styles';

const ActionSheet = ({ children, actionSheetRef }) => (
  <ReactActionSheet ref={actionSheetRef}>
    <TouchableOpacity
      style={styles.iconWrapper}
      onPress={() => actionSheetRef.current?.hide()}>
      <CloseIcon style={styles.icon} />
    </TouchableOpacity>
    <View style={styles.inner}>{children}</View>
  </ReactActionSheet>
);

export default React.memo(ActionSheet);
