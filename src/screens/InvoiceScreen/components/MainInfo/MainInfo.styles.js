import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 25,
    backgroundColor: COLORS.white,
  },
  qrCode: {
    width: 170,
    height: 170,
  },
  item: {
    marginTop: 15,
  },
  firstItem: {
    marginTop: 0,
  },
  itemType: {
    textAlign: 'right',
    fontSize: 12,
    lineHeight: 14,
    color: '#61656E',
  },
  itemValue: {
    textAlign: 'right',
    fontSize: 12,
    lineHeight: 14,
    marginTop: 10,
  },
});
