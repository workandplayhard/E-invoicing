import { StyleSheet } from 'react-native';

import { COLORS } from 'assets/styles/colors';

export default StyleSheet.create({
  info: {
    alignItems: 'flex-end',
    padding: 25,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 13,
    lineHeight: 16,
    color: COLORS.dodgerBlue,
  },
  inner: {
    alignItems: 'flex-end',
  },
  group: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
  },
  item: {
    width: 130,
    marginLeft: 50,
    marginTop: 15,
  },
  itemType: {
    textAlign: 'right',
    fontSize: 12,
    lineHeight: 14,
    color: '#BBBBBB',
  },
  itemValue: {
    textAlign: 'right',
    fontSize: 12,
    lineHeight: 14,
    marginTop: 10,
  },
});
