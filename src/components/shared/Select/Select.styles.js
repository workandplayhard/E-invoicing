import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  select: {
    width: '100%',
    paddingBottom: 15,
    flexDirection: 'row',
    alignItems: 'items',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.dustyGray,
  },
  icon: {
    width: 12,
    height: 10,
    color: COLORS.dodgerBlue,
  },
  placeholder: {
    fontSize: 12,
    lineHeight: 14,
    color: '#BBBBBB',
  },
});
