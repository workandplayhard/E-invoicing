import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  totals: {
    borderWidth: 1,
    borderColor: COLORS.dodgerBlue,
    borderRadius: 10,
  },
  firstTotal: {
    borderTopWidth: 0,
  },
  total: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    borderTopWidth: 1,
    borderTopColor: COLORS.dodgerBlue,
  },
  totalSeparator: {
    width: 1,
    height: '100%',
    backgroundColor: COLORS.dodgerBlue,
  },
  totalValue: {
    fontSize: 12,
    lineHeight: 20,
    flex: 1,
    textAlign: 'center',
    padding: 15,
  },
  totalText: {
    fontSize: 13,
    lineHeight: 16,
    flex: 1,
    padding: 15,
  },
});
