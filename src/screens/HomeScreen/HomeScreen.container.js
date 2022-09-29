import React, { useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { TOKEN_KEY } from 'constants/common';

import { useUser } from 'context/user';

import { CreateInvoiceActionSheet } from './components/CreateInvoiceActionSheet';

import HomeScreen from './HomeScreen';

const HomeScreenContainer = ({ navigation }) => {
  const createInvoiceActionSheetRef = useRef();

  const { user } = useUser();

  const handleNewInvoicePress = () => {
    if (createInvoiceActionSheetRef.current) {
      createInvoiceActionSheetRef.current.show();
    }
  };

  const handleEditInvoicePress = () => {
    navigation.navigate('Home', { screen: 'EditInvoice' });
  };

  const handleViewInvoicesPress = () => {
    navigation.navigate('Home', { screen: 'Invoices' });
  };

  const handleLogoutPress = async () => {
    AsyncStorage.removeItem(TOKEN_KEY);

    navigation.navigate('Auth', { screen: 'Login' });
  };

  return (
    <>
      <HomeScreen
        userName={user?.name}
        onNewInvoicePress={handleNewInvoicePress}
        onEditInvoicePress={handleEditInvoicePress}
        onViewInvoicesPress={handleViewInvoicesPress}
        onLogoutPress={handleLogoutPress}
      />
      <CreateInvoiceActionSheet actionSheetRef={createInvoiceActionSheetRef} />
    </>
  );
};

export default React.memo(HomeScreenContainer);
