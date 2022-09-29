import React from 'react';
import { View } from 'react-native';

import { ActionSheet } from 'components/shared/ActionSheet';
import { Button } from 'components/shared/Button';

import styles from './CreateInvoiceActionSheet.styles';

const CreateInvoiceActionSheet = ({ actionSheetRef }) => (
  <ActionSheet actionSheetRef={actionSheetRef}>
    <View style={styles.actions}>
      <Button style={[styles.action, styles.firstAction]}>فاتورة ذمم</Button>
      <Button style={styles.action}>فاتورة نقدية</Button>
    </View>
  </ActionSheet>
);

export default React.memo(CreateInvoiceActionSheet);
