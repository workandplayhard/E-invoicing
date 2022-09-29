import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

import logoUrl from 'assets/img/logo-sm.png';

import NewInvoiceIcon from 'assets/icons/new-invoice.svg';
import EditInvoiceIcon from 'assets/icons/edit-invoice.svg';
import InvoicesIcon from 'assets/icons/invoices.svg';
import EditIcon from 'assets/icons/edit-float.svg';

import { Typography } from 'components/shared/Typography';

import { FloatButton } from 'components/FloatButton';

import { ActionItem } from './components/ActionItem';

import styles from './HomeScreen.styles';

const HomeScreen = ({
  userName,
  onNewInvoicePress,
  onEditInvoicePress,
  onViewInvoicesPress,
  onLogoutPress,
}) => (
  <SafeAreaView style={styles.screen} edges={['left', 'right']}>
    <LinearGradient
      colors={['#339DFF', '#A6D4FE']}
      style={styles.header}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}>
      <TouchableOpacity style={styles.logout} onPress={onLogoutPress}>
        <Typography style={styles.logoutText}>تسجيل خروج</Typography>
      </TouchableOpacity>
      <Image style={styles.logo} source={logoUrl} />
      <Typography style={styles.title}>مرحبا بك</Typography>
      <Typography style={styles.text} weight="bold">
        {userName}
      </Typography>
    </LinearGradient>
    <View style={styles.actions}>
      <ActionItem
        style={styles.firstAction}
        text="اصدار فاتورة"
        iconComponent={NewInvoiceIcon}
        onPress={onNewInvoicePress}
      />
      <ActionItem
        text="تعديل فاتوره"
        iconComponent={EditInvoiceIcon}
        onPress={onEditInvoicePress}
      />
      <ActionItem
        text="عرض الفواتير"
        iconComponent={InvoicesIcon}
        onPress={onViewInvoicesPress}
      />
    </View>
    <FloatButton iconComponent={EditIcon} />
  </SafeAreaView>
);

export default React.memo(HomeScreen);
