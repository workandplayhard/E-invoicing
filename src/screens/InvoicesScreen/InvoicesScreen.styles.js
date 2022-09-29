import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  inner: {
    marginHorizontal: 25,
  },
  header: {
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  table: {
    marginTop: 25,
  },
  actionCell: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadIcon: {
    width: 24,
    height: 24,
    color: COLORS.dodgerBlue,
  },
  link: {
    alignSelf: 'center',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dodgerBlue,
  },
});
