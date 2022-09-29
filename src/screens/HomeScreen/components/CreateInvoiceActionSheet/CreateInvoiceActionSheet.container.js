import { useNavigation } from '@react-navigation/native';
import React from 'react';

import CreateInvoiceActionSheet from './CreateInvoiceActionSheet';

const CreateInvoiceActionSheetContainer = () => {
  const navigation = useNavigation();

  const handeActionPress = actionType => {
    switch (actionType) {
      case 'new': {
        navigation.navigate('Home', { screen: 'NewInvoice' });

        break;
      }
      case 'edit': {
        navigation.navigate('Home', { screen: 'EditInvoice' });

        break;
      }
    }
  };

  return <CreateInvoiceActionSheet onActionPress={handeActionPress} />;
};

export default React.memo(CreateInvoiceActionSheetContainer);
