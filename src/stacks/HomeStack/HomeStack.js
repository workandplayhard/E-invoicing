import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from 'screens/HomeScreen';
import { InvoicesScreen } from 'screens/InvoicesScreen';
import { InvoiceScreen } from 'screens/InvoiceScreen';
import { NewInvoiceScreen } from 'screens/NewInvoiceScreen';

const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName="NewInvoice"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Dashboard" component={HomeScreen} />
    <Stack.Screen name="Invoices" component={InvoicesScreen} />
    <Stack.Screen name="Invoice" component={InvoiceScreen} />
    <Stack.Screen name="NewInvoice" component={NewInvoiceScreen} />
  </Stack.Navigator>
);

export default React.memo(HomeStack);
